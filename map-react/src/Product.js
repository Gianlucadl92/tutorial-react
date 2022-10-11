import React from "react";

const Product = ({ img, costoFinale, nome, prezzo, children }) => {
  const handleclick = () => {
    alert("Mi hai premuto");
  };

  return (
    <article>
      <div className="card">
        <img src={img} alt={`${nome}`} />
        <h6>{nome}</h6>
        <hr />
        <p>{prezzo}</p>
        <p>bamby000</p>
        <p className="card-time">{children}</p>
        <button onClick={handleclick}>{costoFinale} €</button>
      </div>
    </article>
  );
};

export default Product;
