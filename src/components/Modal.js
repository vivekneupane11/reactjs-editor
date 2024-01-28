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
  const allColors = props.colors || colors;
  useEffect(() => {
    //** Hacky way to call highlight function after changeType state change
    if (type.name && type.value) {
      addHighlight();
    }
  }, [type.value, addHighlight, type.name]);

  const chooseColor = (colorName) => {
    changeType({ name: "highlight", value: colorName });
  };
  return (
    <section className="modal-container">
      <div className="modal-content">
        <h1>Pick your color</h1>

        <div className="container">
          {allColors.map((color) => (
            <span className="color-container" key={color.name}>
              <div
                className="color-box"
                onClick={() => chooseColor(color.name)}
                style={{
                  backgroundColor: `${color.name}`,
                  color: `${color.textColor}`,
                  scale: type.value === color.name ? "1.3" : "1",
                }}
              ></div>
              <span className="color-name">{color.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
