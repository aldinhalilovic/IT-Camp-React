import React from "react";
import "./Card.css";

const Kartica = ({ image, name, occupation }) => {
  return (
    <div>
      <div className="card">
        <img src={image} style={{ width: 150, height: 100 }} />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Kartica;
