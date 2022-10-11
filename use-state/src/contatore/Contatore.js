import React, { useState } from "react";

const Contatore = () => {
  const [contatore, setContatore] = useState(0);

  const reset = () => {
    setContatore(0);
  };

  const diminuisci = () => {
    setContatore(contatore - 1);
  };

  const aumenta = () => {
    // setContatore((oldValue) => {
    //   if (oldValue + 1 === 5) {
    //     return oldValue;
    //   }
    //   return oldValue + 1;
    // });

    setTimeout(function () {
      setContatore((oldValue) => {
        return oldValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div className="item">
        <h2>{contatore}</h2>
        <div className="bottoni">
          <button onClick={aumenta}>Aumenta</button>
          <button onClick={reset}>Reset</button>
          <button onClick={diminuisci}>Diminuisci</button>
        </div>
      </div>
    </>
  );
};

export default Contatore;
