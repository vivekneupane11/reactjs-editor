import React, { useEffect } from "react";
import colors from "../constant/colors";
import { useEditor } from "../customHooks/useEditor";
import useModal from "../customHooks/useModal";
import useUpdateDom from "../customHooks/useUpdateDom";

export default function Modal(props) {
  const changeType = useEditor((state) => state.changeType);
  const type = useEditor((state) => state.type);
  const { addHighlight } = useUpdateDom();
  const toggleModal = useModal((state) => state.toggleModal);
  const changeConfig = useEditor((state) => state.changeConfig);

  // Normalize colors: support both string arrays (legacy) and object arrays
  const rawColors = props.colors || colors;
  const allColors = rawColors.map((c) =>
    typeof c === "string" ? { name: c, hex: c } : c
  );

  useEffect(() => {
    if (type.name && type.value) {
      addHighlight();
    }
  }, [type.value, addHighlight, type.name]);

  const chooseColor = (colorName) => {
    changeType({ name: "highlight", value: colorName });
  };

  const handleCloseModal = () => {
    toggleModal();
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
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Pick a color</h2>
          <button onClick={handleCloseModal} className="modal-close-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="color-grid">
          {allColors.map((color) => (
            <button
              className={`color-swatch ${type.value === color.name ? "active" : ""}`}
              key={color.name}
              onClick={() => chooseColor(color.name)}
              style={{ "--swatch-color": color.hex }}
              title={color.name}
            >
              <span
                className="swatch-fill"
                style={{ backgroundColor: color.hex }}
              />
              {type.value === color.name && (
                <svg className="swatch-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color.name === "white" || color.name === "gold" ? "#000" : "#fff"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              <span className="swatch-label">{color.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
