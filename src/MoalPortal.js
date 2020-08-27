import React from "react";
import ReactDOM from "react-dom";

function ModalPortal({ children }) {
  const modalEl = document.getElementById("modal");
  return ReactDOM.createPortal(children, modalEl);
}

export default ModalPortal;
