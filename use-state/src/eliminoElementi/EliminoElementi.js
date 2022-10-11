import React, { useState } from "react";
import data from "../data";

const EliminoElementi = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((el) => el.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((el) => {
        const { id, name } = el;
        return (
          <div key={id} className="item">
            <h5>{name}</h5>
            <button
              type="button"
              className="delete"
              onClick={() => removeItem(id)}
            >
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default EliminoElementi;
