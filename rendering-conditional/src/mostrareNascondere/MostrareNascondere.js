import React, { useState, useEffect } from "react";

const MostrareNascondere = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Mostrare e Nascondere u Componente</h1>

      <div className="card">
        <button onClick={() => setShow(!show)}>
          {show ? "nascondi" : "mostra"}
        </button>
        {show && <Elemento />}
      </div>
    </>
  );
};

const Elemento = () => {
  const [contatore, setContatore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((oldValue) => oldValue + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [contatore]);

  return (
    <div>
      <h2>{contatore}</h2>
    </div>
  );
};

export default MostrareNascondere;
