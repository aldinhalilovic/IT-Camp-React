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
            <a href="">Prikaži na mapi</a>
            <a href="" className="km">
              4,4 km od centra
            </a>
          </div>
          <p className="description">
            Smešten u Zemunu, na 5,9 km od centra Beograda, hotel Theater nudi
            elegantne i udobne sobe sa besplatnim bežičnim internetom, bar u
            foajeu i terasu.
          </p>
        </div>
        <div className="review">
          <div className="text">
            <div className="rating">
              <div className="customers">
                <div className="first">Sjajan</div>
                <div className="second"> 57 recenzija</div>
              </div>
              <div className="star">
                <h3>8,7</h3>
              </div>
            </div>
            <div className="price">
              <h2>Prikaži cene</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkngCard;
