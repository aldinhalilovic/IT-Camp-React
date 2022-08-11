import React from "react";
import "./BkngCard.css";

const BkngCard = () => {
  return (
    <div className="place">
      <div className="bigCard">
        <div className="image">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/71426844.webp?k=fe5ffd67b7cbb2caeb054ec5c135bd81a0f7b038ec545874f1b007db9b1f2cc9&o=&s=1" />
        </div>
        <div className="main">
          <h1>Ime hotela</h1>
          <div className="location">
            <a href="">Zemun,Beograd</a>
            <a href="">Prikazi na mapi</a>
          </div>
          <p>
            Smešten u Zemunu, na 5,9 km od centra Beograda, hotel Theater nudi
            elegantne i udobne sobe sa besplatnim bežičnim internetom, bar u
            foajeu i terasu.
          </p>
        </div>
        <div className="review">
          <div className="text">
            <div>
              <h3>Sjajan</h3>
              <h5>50 recenzija</h5>
            </div>
            <div className="star">
              <h3>8,7</h3>
            </div>
            <div className="price">
              <h2>Prikazi cene</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkngCard;
