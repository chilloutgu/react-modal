import React from "react";
import "./Modal.css";
import ModalPortal from "./MoalPortal";

function Modal({ openModal, onCloseModal }) {
  return (
    <>
      {openModal && (
        <ModalPortal>
          <div className="Modal">
            <div className="content">
              <h3>이것은 모달!</h3>
              <p>모달의 내용입니다.</p>
              <button onClick={onCloseModal}>닫기</button>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}

export default Modal;
