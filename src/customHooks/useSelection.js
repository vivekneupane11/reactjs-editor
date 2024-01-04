import { useCallback, useEffect, useRef, useState } from "react";
import { fromRange } from "xpath-range";
import { useEditor } from "./useEditor";

export default function useSelection() {
  const [mousePoint, setMousePoint] = useState({ x: 0, y: 0 });
  const changeConfig = useEditor((state) => state.changeConfig);
  const editorRef = useRef();
  const selectText = useCallback(
    (e) => {
      if(!editorRef.current.contains(e.target)) return;
      let text = document.getSelection().toString();
      if (!text) return;
      setMousePoint({ x: e.pageX, y: e.pageY });

      const xPath = fromRange(
        document.getSelection().getRangeAt(0),
        editorRef.current
      );
      const xPaths = xPath.start.split("/").filter((e) => e)
      const [removedMain,...remainingPaths] = xPaths;
      changeConfig({ xPath: remainingPaths, selectedText: text });
    },
    [changeConfig]
  );

  useEffect(() => {
    document.addEventListener("mouseup", selectText);

    return () => {
      document.removeEventListener("mouseup", selectText);
    };
  }, [selectText]);
  return { editorRef, mousePoint };
}
