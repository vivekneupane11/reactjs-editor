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

  function updateDom(domEle, xPaths) {
    let xPathToArray = xPaths;

    if (!xPaths) {
      xPathToArray = config.xPath;

      xPathToArray.reverse();
    }

    if (!!domEle?.props?.children.length) {
      let currentElement = xPathToArray.pop();
      let currentIndex = extractNumber(currentElement);
      let specificIndex = null;
      const specificElements = domEle?.props?.children.filter(
        (domElement, index) => {
          if (!domElement?.type && domElement?.includes(config.selectedText)) {
            specificIndex = index;
            const elements = domElement.split(config.selectedText);
            let Childrens = []
            elements.forEach((element,index) => {
              if(index === elements.length-1){
               Childrens.push(element)
              }
              else{
               Childrens.push(element)
               Childrens.push(   {
                 type: "span",
                 props: {
                   children:
                     type.name === "comment"
                       ? [
                           config.selectedText,
                           {
                             type: "span",
                             props: {
                               className: "hover-card",
                               children: [
                                 {
                                   type: "span",
                                   props: {
                                     className: "hover-title",
                                     children: [config.selectedText],
                                   },
                                 },
                                 type.value,
                               ],
                             },
                           },
                         ]
                       : [config.selectedText],
                   className: `text-shadow-reed ${type.name} ${
                     type.value ? type.value : ""
                   } `,
                 },
               },)
              }
                
             })
            let child = {
              type: "span",
              props: {
                children: Childrens
              },
            };
            let newChildren = domEle?.props?.children;
            newChildren[specificIndex] = child;
            Object.assign(domEle?.props?.children, newChildren);
          }
          return currentElement?.startsWith(domElement.type, []);
        }
      );

      Object.assign(domEle?.props?.children, []);

      updateDom(specificElements[currentIndex - 1], xPathToArray);
    }

    return domEle;
  }

  const addHighlight = () => {
    if (
      type.name === "highlight" &&
      type.value &&
      config.selectedText &&
      config.xPath
    ) {
      
      let updatedDom = updateDom(dom, "");
      const newDom = Object.create(updatedDom);
      setDom(newDom);
      changeConfig({ xPath: "", selectedText: "" });
      changeType({ name: "", value: "" });
      toggleModal((init) => !init);
    }
  };

  const addBold = () => {
    if (type.name === "bold" && config.selectedText && config.xPath) {
      let updatedDom = updateDom(dom, "");
      const newDom = Object.create(updatedDom);
      setDom(newDom);
      changeConfig({ xPath: "", selectedText: "" });
      changeType({ name: "", value: "" });
    }
  };
  const addComment = () => {
    if (type.name === "comment" && config.selectedText && config.xPath) {
      let updatedDom = updateDom(dom, "");
      const newDom = Object.create(updatedDom);
      setDom(newDom);
      changeConfig({ xPath: "", selectedText: "" });
      changeType({ name: "", value: "" });
    }
  };

  return {
    addBold,
    addComment,
    addHighlight,
  };
}
