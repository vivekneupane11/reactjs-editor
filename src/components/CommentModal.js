import React, { useEffect, useState } from "react";
import useCommentModal from "../customHooks/useCommentModal";
import { useEditor } from "../customHooks/useEditor";
import useUpdateDom from "../customHooks/useUpdateDom";
export default function CommentModal() {
  const [note, setNote] = useState("");
  const changeType = useEditor((state) => state.changeType);
  const type = useEditor((state) => state.type);

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

  return (
    <section className="modal-container-reed">
      <div className="modal-content-reed">
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
