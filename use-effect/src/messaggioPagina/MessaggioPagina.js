import React, { useState, useEffect } from "react";

const MessaggioPagina = () => {
  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };

  useEffect(() => {
    if (value < 1) {
      document.title = `Nessun Messaggio: ${value}`;
    } else {
      document.title = `Nuovo Messaggio: ${value}`;
    }
  }, [value]);

  return (
    <>
      <div className="item">
        <h1>Messaggio Pagina</h1>
        <h2>
          {" "}
          value: <span>{value}</span>{" "}
        </h2>
        <button onClick={aumenta}>Aumenta</button>
      </div>
      <hr />
    </>
  );
};

export default MessaggioPagina;
