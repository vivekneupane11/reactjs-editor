import React, { useEffect, useState } from "react";
import useCommentModal from "../customHooks/useCommentModal";
import { useEditor } from "../customHooks/useEditor";
import useUpdateDom from "../customHooks/useUpdateDom";
export default function CommentModal() {
  const [note, setNote] = useState("");
  const changeType = useEditor((state) => state.changeType);
  const type = useEditor((state) => state.type);
  const changeConfig = useEditor((state) => state.changeConfig);

  const toggleCommentModal = useCommentModal(
    (state) => state.toggleCommentModal
  );
  const { addComment } = useUpdateDom();
  useEffect(() => {
    if (type.name && type.value) {
      addComment();
      toggleCommentModal();
    }
  }, [type.name, type.value, addComment, toggleCommentModal]);

  const submitNote = () => {
    let text = note; 
     changeType({ name:'comment', value:text });
  };
  const addNotes = (e) => {
    e.preventDefault();
    setNote(e.target.value);
  };

  const handleCloseModal = ()=>{
    toggleCommentModal()
    changeType({ name:'', value:'' });
    changeConfig({ xPath: "", selectedText: "" });
    
  }

  return (
    <section className="modal-container-reed" >
      <div className="modal-content-reed" style={{position:'relative'}}>
      <span onClick={handleCloseModal}  className="floating-toolbar-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={"27px"}
              width={"27px"}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        <h1>Add Your Notes</h1>
        <textarea
          onChange={addNotes}
          className="notes-input"
          placeholder="Enter your Notes"
        />
        <button
          onClick={() => submitNote()}
          className="btn-submit-reed"
        >
          Add Note
        </button>
      </div>
    </section>
  );
}
