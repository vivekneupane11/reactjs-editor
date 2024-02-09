import React, { useEffect } from "react";
import convert from "react-from-dom";
import useCommentModal from "../customHooks/useCommentModal";
import { useDom } from "../customHooks/useDom";
import useModal from "../customHooks/useModal";
import useSelection from "../customHooks/useSelection";
import { createComponents } from "../utils/createcomponents";
import CommentModal from "./CommentModal";
import Modal from "./Modal";
import FloatingToolBar from "./floatingToolBar";
const ReactEditor = (props) => {
  const open = useModal((state) => state.open);
  const openComment = useCommentModal((state) => state.openComment);
  const setDom = useDom((state) => state.setDom);
  const dom = useDom((state) => state.dom);
  const NoteContents = createComponents(dom);
  const { editorRef, mousePoint } = useSelection();
  useEffect(()=>{
  
if(!dom){
  const htmlJson = convert(props.htmlContent.replace(/\s+/g, ' '))
  setDom({...htmlJson})
}
  },[dom,setDom,props])
  return (
    <>
      {open && <Modal colors={props.colors} />}
      {openComment && <CommentModal />}

    {
      dom &&   <div className="notes-wrapper" ref={editorRef}>
      {NoteContents}
    </div>
    }
      <FloatingToolBar x={mousePoint.x} y={mousePoint.y} />

     
    </>
  );
};

export default ReactEditor;
