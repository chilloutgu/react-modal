import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [openModal, isOpenModal] = useState(false);

  const onOpenModal = () => {
    isOpenModal(true);
  };

  const onCloseModal = () => {
    isOpenModal(false);
  };

  return (
    <div className="App">
      <h1>안녕하세요 리액트!</h1>
      <button onClick={onOpenModal}>모달 열기</button>
      <Modal openModal={openModal} onCloseModal={onCloseModal} />
    </div>
  );
}

export default App;
