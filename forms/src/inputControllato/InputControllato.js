import React, { useState, useEffect } from "react";

const InputControllato = () => {
  const [persona, setPersona] = useState({
    nome: "",
    email: "",
    cellulare: "",
  });
  const [persone, setPersone] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persona.nome && persona.email && persona.cellulare) {
      setPersone([
        ...persone,
        {
          id: new Date(Date.now()).getTime().toString(),
          ...persona,
        },
      ]);
      setPersona({
        nome: "",
        email: "",
        cellulare: "",
      });
    } else {
      alert("Riempi il Form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };

  useEffect(() => {
    console.log(persone);
  }, [persone]);

  return (
    <>
      <form className="forms">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={persona.nome}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={persona.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cellulare">Cellulare:</label>
          <input
            id="cellulare"
            type="tel"
            name="cellulare"
            value={persona.cellulare}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Invia
        </button>
      </form>
    </>
  );
};

export default InputControllato;
