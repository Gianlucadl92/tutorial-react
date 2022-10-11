import Modal from "./Modal";
import reducer from "./Redu";
import { APRI_MODAL, CHIUDI_MODAL } from "./action";
import React, { useReducer } from "react";

const initialState = {
  isModalOpen: false,
  modalContent: "Eccomi, Sono un Modal",
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const tiPremo = () => {
    dispatch({ type: "PREMO_BOTTONE" });
  };

  const apriModal = () => {
    dispatch({ type: APRI_MODAL, payload: "il mio nuovo modal" });
  };

  const chiudiModal = () => {
    dispatch({ type: CHIUDI_MODAL });
  };

  return (
    <>
      <div className="mostra">
        <h1>useReducer</h1>
        <button className="button" onClick={apriModal}>
          Mostrami
        </button>
      </div>
      <Modal
        modalContent={state.modalContent}
        modalState={state.isModalOpen}
        chiudiModal={chiudiModal}
      />
    </>
  );
};

export default Reducer;
