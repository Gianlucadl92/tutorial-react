import React, { useState } from "react";

const Oggetti = () => {
  const [person, setPerson] = useState({
    name: "Mario",
    age: 45,
    saluto: "Ciao",
  });

  const cambiaSaluto = () => {
    setPerson({
      ...person,
      age: 46,
      saluto: "Ciao ho fatto gli anni",
    });
  };

  return (
    <>
      <div className="item">
        <div className="persona">
          <h5>{person.name}</h5>
          <h5>{person.age}</h5>
          <h5>{person.saluto}</h5>
        </div>
        <button onClick={cambiaSaluto}>Cambia Saluto</button>
      </div>
    </>
  );
};

export default Oggetti;
