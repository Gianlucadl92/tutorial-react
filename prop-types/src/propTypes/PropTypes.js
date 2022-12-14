import React from "react";
import PropTypes from "prop-types";
import datiIncompleti from "../data";

const defaultImage =
  "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg";

const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => (
        <Prodotto key={el.id} {...el} />
      ))}
    </div>
  );
};

const Prodotto = ({ nome, image, prezzo }) => {
  const img = image && image.url;

  return (
    <article>
      <div className="card-body">
        <img src={img || defaultImage} alt={nome || "divano default"} />
        <div className="container">
          <h4 className="card-title">{nome || "divano default"}</h4>
          <p className="card-subtitle">€ {prezzo || 7.99}</p>
        </div>
      </div>
    </article>
  );
};

Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

Prodotto.defaultProps = {
  nome: "Sedie con tavolo",
  prezzo: 349.99,
};

export default PropComponent;
