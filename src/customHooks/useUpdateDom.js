import extractNumber from "../utils/extractNumberfromString";
import { useDom } from "./useDom";
import { useEditor } from "./useEditor";
import useModal from "./useModal";

export default function useUpdateDom() {
  const dom = useDom((state) => state.dom);
  const setDom = useDom((state) => state.setDom);
  const type = useEditor((state) => state.type);
  const changeType = useEditor((state) => state.changeType);
  const config = useEditor((state) => state.config);
  const changeConfig = useEditor((state) => state.changeConfig);
  const toggleModal = useModal((state) => state.toggleModal);

  const defaultConfig = {
    startPath: [],
    startOffset: 0,
    endPath: [],
    endOffset: 0,
    selectedText: "",
  };

  // Create a formatted span for text content
  function createFormattedSpan(text) {
    return {
      type: "span",
      props: {
        children:
          type.name === "comment"
            ? [
                text,
                {
                  type: "span",
                  props: {
                    className: "hover-card",
                    children: [
                      {
                        type: "span",
                        props: {
                          className: "hover-title",
                          children: [text],
                        },
                      },
                      type.value,
                    ],
                  },
                },
              ]
            : [text],
        className: `text-shadow-reed ${type.name} ${type.value ? type.value : ""} `,
      },
    };
  }

  // Apply formatting to a child (string or element)
  function applyFormatting(content) {
    if (typeof content === "string") {
      return createFormattedSpan(content);
    }
    // For elements, add the formatting class directly instead of nesting in a wrapper span
    return {
      ...content,
      props: {
        ...(content.props || {}),
        className: `${content.props?.className || ""} text-shadow-reed ${type.name} ${type.value ? type.value : ""} `.trim(),
      },
    };
  }

  // Find the actual array index of a child matching an XPath segment
  function findChildArrayIndex(parent, segment) {
    const idx = Number(extractNumber(segment));
    const isText = segment.startsWith("text()");
    let count = 0;
    const children = parent.props.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isText && typeof child === "string") {
        count++;
        if (count === idx) return i;
      } else if (!isText && child?.type && segment.startsWith(child.type)) {
        count++;
        if (count === idx) return i;
      }
    }
    return -1;
  }

  // Format from a point to the end of an element (and wrap all subsequent siblings)
  function formatTail(element, path, offset) {
    const segment = path[0];
    const arrIdx = findChildArrayIndex(element, segment);
    if (arrIdx === -1) return;
    const children = element.props.children;

    if (path.length === 1 && segment.startsWith("text()")) {
      // Leaf text node — split at offset, wrap the tail
      const text = children[arrIdx];
      const before = text.substring(0, offset);
      const after = text.substring(offset);
      const parts = [];
      if (before) parts.push(before);
      if (after) parts.push(createFormattedSpan(after));
      children[arrIdx] = { type: "span", props: { children: parts } };

      // Wrap all siblings after
      for (let i = arrIdx + 1; i < children.length; i++) {
        children[i] = applyFormatting(children[i]);
      }
    } else {
      // Recurse into child element, then wrap siblings after it
      formatTail(children[arrIdx], path.slice(1), offset);
      for (let i = arrIdx + 1; i < children.length; i++) {
        children[i] = applyFormatting(children[i]);
      }
    }
  }

  // Format from the start of an element to a point (and wrap all preceding siblings)
  function formatHead(element, path, offset) {
    const segment = path[0];
    const arrIdx = findChildArrayIndex(element, segment);
    if (arrIdx === -1) return;
    const children = element.props.children;

    // Wrap all siblings before
    for (let i = 0; i < arrIdx; i++) {
      children[i] = applyFormatting(children[i]);
    }

    if (path.length === 1 && segment.startsWith("text()")) {
      // Leaf text node — split at offset, wrap the head
      const text = children[arrIdx];
      const before = text.substring(0, offset);
      const after = text.substring(offset);
      const parts = [];
      if (before) parts.push(createFormattedSpan(before));
      if (after) parts.push(after);
      children[arrIdx] = { type: "span", props: { children: parts } };
    } else {
      // Recurse into child element
      formatHead(children[arrIdx], path.slice(1), offset);
    }
  }

  function updateDom(domEle) {
    const { startPath, startOffset, endPath, endOffset } = config;

    // Find common prefix length between start and end paths
    let commonLen = 0;
    while (
      commonLen < startPath.length &&
      commonLen < endPath.length &&
      startPath[commonLen] === endPath[commonLen]
    ) {
      commonLen++;
    }

    // CASE 1: Same text node (paths are identical)
    if (commonLen === startPath.length && commonLen === endPath.length) {
      // Walk to the parent of the text node
      let parent = domEle;
      for (let i = 0; i < startPath.length - 1; i++) {
        const idx = findChildArrayIndex(parent, startPath[i]);
        if (idx === -1) return domEle;
        parent = parent.props.children[idx];
      }

      const textSeg = startPath[startPath.length - 1];
      const textIdx = findChildArrayIndex(parent, textSeg);
      if (textIdx === -1) return domEle;

      const text = parent.props.children[textIdx];
      const before = text.substring(0, startOffset);
      const selected = text.substring(startOffset, endOffset);
      const after = text.substring(endOffset);

      const parts = [];
      if (before) parts.push(before);
      parts.push(createFormattedSpan(selected));
      if (after) parts.push(after);

      parent.props.children[textIdx] = {
        type: "span",
        props: { children: parts },
      };

      return domEle;
    }

    // CASE 2: Cross-element selection
    // Walk to common ancestor (all common segments are element segments)
    let ancestor = domEle;
    for (let i = 0; i < commonLen; i++) {
      const idx = findChildArrayIndex(ancestor, startPath[i]);
      if (idx === -1) return domEle;
      ancestor = ancestor.props.children[idx];
    }

    const startRem = startPath.slice(commonLen);
    const endRem = endPath.slice(commonLen);

    // Find start and end children in common ancestor
    const startChildIdx = findChildArrayIndex(ancestor, startRem[0]);
    const endChildIdx = findChildArrayIndex(ancestor, endRem[0]);
    if (startChildIdx === -1 || endChildIdx === -1) return domEle;

    // 1. Format start child: from startOffset to end
    if (startRem.length === 1 && startRem[0].startsWith("text()")) {
      // Start is a text node at ancestor level
      const text = ancestor.props.children[startChildIdx];
      const before = text.substring(0, startOffset);
      const after = text.substring(startOffset);
      const parts = [];
      if (before) parts.push(before);
      if (after) parts.push(createFormattedSpan(after));
      ancestor.props.children[startChildIdx] = {
        type: "span",
        props: { children: parts },
      };
    } else {
      // Start is in a descendant element
      formatTail(
        ancestor.props.children[startChildIdx],
        startRem.slice(1),
        startOffset
      );
    }

    // 2. Wrap all children between start and end
    for (let i = startChildIdx + 1; i < endChildIdx; i++) {
      ancestor.props.children[i] = applyFormatting(ancestor.props.children[i]);
    }

    // 3. Format end child: from beginning to endOffset
    if (endRem.length === 1 && endRem[0].startsWith("text()")) {
      // End is a text node at ancestor level
      const text = ancestor.props.children[endChildIdx];
      const before = text.substring(0, endOffset);
      const after = text.substring(endOffset);
      const parts = [];
      if (before) parts.push(createFormattedSpan(before));
      if (after) parts.push(after);
      ancestor.props.children[endChildIdx] = {
        type: "span",
        props: { children: parts },
      };
    } else {
      // End is in a descendant element
      formatHead(
        ancestor.props.children[endChildIdx],
        endRem.slice(1),
        endOffset
      );
    }

    return domEle;
  }

  const addHighlight = () => {
    if (
      type.name === "highlight" &&
      type.value &&
      config.selectedText &&
      config.startPath.length
    ) {
      let updatedDom = updateDom(dom);
      const newDom = Object.create(updatedDom);
      setDom(newDom);
      changeConfig(defaultConfig);
      changeType({ name: "", value: "" });
      toggleModal((init) => !init);
    }
  };

  const addBold = () => {
    if (type.name === "bold" && config.selectedText && config.startPath.length) {
      let updatedDom = updateDom(dom);
      const newDom = Object.create(updatedDom);
      setDom(newDom);
      changeConfig(defaultConfig);
      changeType({ name: "", value: "" });
    }
  };

  const addComment = () => {
    if (type.name === "comment" && config.selectedText && config.startPath.length) {
      let updatedDom = updateDom(dom);
      const newDom = Object.create(updatedDom);
      setDom(newDom);
      changeConfig(defaultConfig);
      changeType({ name: "", value: "" });
    }
  };

  return {
    addBold,
    addComment,
    addHighlight,
  };
}
