import React, { useState, useContext, createContext } from "react";
import data from "../data";

const AppContext = createContext();

const Context = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));
  return (
    <AppContext.Provider value={{ people, removePeople }}>
      <div>
        <h1>Use Context Component</h1>
        <Elenco />
      </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
  const info = useContext(AppContext);
  console.log(info);
  return (
    <div>
      {info.people.map((el, index) => {
        return <Persona key={index} {...el} />;
      })}
    </div>
  );
};

const Persona = ({ id, name }) => {
  const { removePeople } = useContext(AppContext);
  return (
    <div className="container">
      <h3> {name} </h3>
      <button onClick={() => removePeople(id)}> x </button>
    </div>
  );
};

export default Context;
