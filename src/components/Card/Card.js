import React from "react";
import "./Card.css";

const Kartica = ({ image, name, occupation, verification }) => {
  return (
    <div className="kartica">
      <div className="card">
        <img src={image} style={{ width: 150, height: 100 }} />
        <div className="container">
          <h4>
            {/* {verification ? <b>{name} ✔</b> : <b>{name}</b>} */}
            {/* // {name} {verification && "✔"} */}
          </h4>
          <p>{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Kartica;
