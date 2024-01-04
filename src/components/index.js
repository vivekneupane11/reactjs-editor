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
const UIRender = (props) => {
  const open = useModal((state) => state.open);
  const openComment = useCommentModal((state) => state.openComment);
  const setDom = useDom((state) => state.setDom);
  const dom = useDom((state) => state.dom);
  const NoteContents = createComponents(dom);
  const { editorRef, mousePoint } = useSelection();
  useEffect(()=>{
  
if(!dom){
  const htmlJson = convert(props.htmlContent)
  setDom({...htmlJson})
}
  },[dom,setDom,props])
  return (
    <>
      {open && <Modal />}
      {openComment && <CommentModal />}

    {
      dom &&   <div className="notes-wrapper" ref={editorRef}>
      {NoteContents}
    </div>
    }
      <FloatingToolBar x={mousePoint.x} y={mousePoint.y} />

      {/* Just a notice for mobile users */}
    <p>Not available for mobile</p>
    </>
  );
};

export default UIRender;
