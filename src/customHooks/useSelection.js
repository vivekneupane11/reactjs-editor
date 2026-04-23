import { useCallback, useEffect, useRef, useState } from "react";
import { fromRange } from "xpath-range";
import { useEditor } from "./useEditor";

export default function useSelection() {
  const [mousePoint, setMousePoint] = useState({ x: 0, y: 0 });
  const changeConfig = useEditor((state) => state.changeConfig);
  const editorRef = useRef();
  const selectText = useCallback(
   async (e) => {
      if(!editorRef.current.contains(e.target)) return;
      let text = document.getSelection().toString();
      if (!text) return;
      setMousePoint({ x: e.clientX, y: e.clientY });

     try{
      const xPath = await fromRange(
        document.getSelection().getRangeAt(0),
        editorRef.current
      );
      const startPaths = xPath.start.split("/").filter((e) => e);
      const [,...startPath] = startPaths;
      const endPaths = xPath.end.split("/").filter((e) => e);
      const [,...endPath] = endPaths;
      changeConfig({
        startPath,
        startOffset: xPath.startOffset,
        endPath,
        endOffset: xPath.endOffset,
        selectedText: text
      });
     }
     catch(err){
      // console.log("Selecting outside htmlContent won't work")
     }

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
