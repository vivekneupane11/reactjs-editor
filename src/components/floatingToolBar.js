import React, { useEffect, useState } from "react";
import useCommentModal from "../customHooks/useCommentModal";
import { useEditor } from "../customHooks/useEditor";
import useModal from "../customHooks/useModal";
import useUpdateDom from "../customHooks/useUpdateDom";

export default function FloatingToolBar({ x, y }) {
  const [open, setOpen] = useState(true);
  const changeType = useEditor(state => state.changeType)
  const { addBold, addItalic, addUnderline } = useUpdateDom()

  const closeMenu = () => setOpen(!open);
  const toggleModal = useModal(state => state.toggleModal)
  const toggleCommentModal = useCommentModal(state => state.toggleCommentModal)

  const type = useEditor((state) => state.type);
  const config = useEditor((state) => state.config);

  const openModal = ({ name, value }) => {


    changeType({ name, value })
    if (name === 'bold') return;
    if (name === 'italic') return;
    if (name === 'underline') return;
    if (name === 'comment') {
      toggleCommentModal()
    }
    else {
      toggleModal()

    }

  }
  useEffect(() => {
    if (type.name === 'bold' && config.selectedText) {
      addBold();
    }
    if (type.name === 'italic' && config.selectedText) {
      addItalic();
    }
    if (type.name === 'underline' && config.selectedText) {
      addUnderline();
    }
  }, [type.name, addBold, addItalic, addUnderline])
  useEffect(() => {
    setOpen(true);
  }, [x]);
  return (
    <>
      {open && config.selectedText && x ? (
        <section
          style={{ left: `${x - 100}px`, top: `${y + 10}px`, position: "absolute" }}
        >
          <div className="floating-toolbar">
            <span onClick={() => openModal({ name: 'bold' })} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"20px"}
                width={"20px"}
                fill="#000000"
                viewBox="0 -960 960 960"
              >
                <path d="M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z" />
              </svg>
            </span>
            <span onClick={() => openModal({ name: 'italic' })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"20px"}
                width={"20px"}
                fill="#000000"
                viewBox="0 -960 960 960"
              >
                <path d="M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z" />
              </svg>
            </span>
            <span onClick={() => openModal({ name: 'underline' })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"20px"}
                width={"20px"}
                fill="#000000"
                viewBox="0 -960 960 960"
              >
                <path d="M200-120v-80h560v80H200Zm280-160q-101 0-157-63t-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63Z" />
              </svg>
            </span>
            <span onClick={() => openModal({ name: 'highlight' })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height={"20px"}
                width={"20px"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9"
                />
              </svg>
            </span>
            <span onClick={() => openModal({ name: 'comment' })} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height="20px"
                width={"20px"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </span>
          </div>
          <span onClick={closeMenu} className="floating-toolbar-close">
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
        </section>
      ) : null}
    </>
  );
}
