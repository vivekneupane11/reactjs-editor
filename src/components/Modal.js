import React, { useEffect } from "react";
import colors from "../constant/colors";
import { useEditor } from "../customHooks/useEditor";
import useModal from "../customHooks/useModal";
import useUpdateDom from "../customHooks/useUpdateDom";
export default function Modal(props) {
  const changeType = useEditor((state) => state.changeType);
  const type = useEditor((state) => state.type);

  const {addHighlight} = useUpdateDom()
  const toggleModal = useModal((state) => state.toggleModal);
  const changeConfig = useEditor((state) => state.changeConfig);
  const allColors = props.colors || colors;
useEffect(()=>{
    //** Hacky way to call highlight function after changeType state change
    if(type.name && type.value){
      addHighlight()

    }

},[type.value,addHighlight,type.name])



  const chooseColor = (colorName) => {
    changeType({ name: "highlight", value: colorName });
  };
  const handleCloseModal = ()=>{
    toggleModal()
    changeType({ name:'', value:'' });
    changeConfig({ xPath: "", selectedText: "" });
    
  }
  return (
    <section className="modal-container-reed">
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
        <h1>Pick your color</h1>

        <div className="container-reed">
        {allColors.map((color) => (
            <span className="color-container-reed" key={color}>
              <div
                className="color-box"
                onClick={() => chooseColor(color)}
                style={{
                  backgroundColor: `${color}`,
                  scale: type.value === color ? "1.3" : "1",
                }}
              ></div>
              <span className="color-name">{color}</span>
            </span>
          ))}
        </div>
   
      </div>
    </section>
  );
}
