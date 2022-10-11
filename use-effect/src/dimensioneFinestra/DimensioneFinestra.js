import React, { useState, useEffect } from "react";

const DimensioneFinestra = () => {
  const [size, setSize] = useState(window.innerWidth);

  function dimensioneFinestra() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", dimensioneFinestra);
  }, []);

  return (
    <>
      <h1>Dimensione Finestra</h1>
      <div className="container">
        <h1>{size}</h1>
      </div>
      <hr />
    </>
  );
};

export default DimensioneFinestra;
