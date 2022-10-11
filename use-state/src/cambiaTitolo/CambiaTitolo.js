import React, { useState } from "react";

const CambiaTitolo = () => {
  const [titolo, setTitolo] = useState("Hello World!");

  const cambia = () => {
    if (titolo === "Hello World!") {
      setTitolo("Titolo Cambiato");
    } else {
      setTitolo("Hello World!");
    }
  };

  return (
    <>
      <h1>{titolo}</h1>
      <button type="button" className="btn" onClick={cambia}>
        Cambia
      </button>
    </>
  );
};

export default CambiaTitolo;
