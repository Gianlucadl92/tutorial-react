import React from "react";

const Modal = ({ modalContent, modalState, chiudiModal }) => {
  return (
    <>
      <section className={`modal-section ${modalState ? "show-modal" : ""}`}>
        <div className="modal">
          <h2>{modalContent || "Sono Un Modal"}</h2>
          <button className="chiudi" onClick={chiudiModal}>
            x
          </button>
        </div>
      </section>
    </>
  );
};

export default Modal;
