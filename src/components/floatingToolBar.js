import React, { useEffect, useState } from "react";
import useCommentModal from "../customHooks/useCommentModal";
import { useEditor } from "../customHooks/useEditor";
import useModal from "../customHooks/useModal";
import useUpdateDom from "../customHooks/useUpdateDom";

export default function FloatingToolBar({ x, y }) {
  const [open, setOpen] = useState(true);
  const changeType = useEditor((state) => state.changeType);
  const { addBold } = useUpdateDom();

  const closeMenu = () => setOpen(!open);
  const toggleModal = useModal((state) => state.toggleModal);
  const toggleCommentModal = useCommentModal(
    (state) => state.toggleCommentModal
  );

  const type = useEditor((state) => state.type);
  const config = useEditor((state) => state.config);

  const openModal = ({ name, value }) => {
    changeType({ name, value });
    if (name === "bold") return;
    if (name === "comment") {
      toggleCommentModal();
    } else {
      toggleModal();
    }
  };

  useEffect(() => {
    if (type.name === "bold" && config.selectedText) {
      addBold();
    }
  }, [type.name, addBold]);

  useEffect(() => {
    setOpen(true);
  }, [x]);

  return (
    <>
      {open && config.selectedText && x ? (
        <section
          className="toolbar-wrapper"
          style={{
            left: `${x - 80}px`,
            top: `${y + 12}px`,
            position: "absolute",
          }}
        >
          <div className="floating-toolbar">
            <button
              className="toolbar-btn"
              onClick={() => openModal({ name: "bold" })}
              title="Bold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6zm0 8h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            <div className="toolbar-divider" />
            <button
              className="toolbar-btn"
              onClick={() => openModal({ name: "highlight" })}
              title="Highlight"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </button>
            <div className="toolbar-divider" />
            <button
              className="toolbar-btn"
              onClick={() => openModal({ name: "comment" })}
              title="Comment"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
            <div className="toolbar-divider" />
            <button
              className="toolbar-btn toolbar-btn-close"
              onClick={closeMenu}
              title="Dismiss"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
