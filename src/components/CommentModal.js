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
    if (!note.trim()) return;
    changeType({ name: "comment", value: note });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      submitNote();
    }
  };

  const addNotes = (e) => {
    e.preventDefault();
    setNote(e.target.value);
  };

  const handleCloseModal = () => {
    toggleCommentModal();
    changeType({ name: "", value: "" });
    changeConfig({
      startPath: [],
      startOffset: 0,
      endPath: [],
      endOffset: 0,
      selectedText: "",
    });
  };

  return (
    <section className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-card modal-card-comment" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add a note</h2>
          <button onClick={handleCloseModal} className="modal-close-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <textarea
          onChange={addNotes}
          onKeyDown={handleKeyDown}
          className="notes-input"
          placeholder="Write your note..."
          autoFocus
        />
        <div className="modal-footer">
          <span className="modal-hint">Ctrl+Enter to submit</span>
          <button onClick={submitNote} className="btn-submit">
            Add Note
          </button>
        </div>
      </div>
    </section>
  );
}
