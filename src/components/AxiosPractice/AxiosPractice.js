import React from "react";
import axios from "axios";
import "./AxiosPractice.css";

const AxiosPractice = ({ key, author, quote }) => {
  return (
    <div className="practice" key={key}>
      <div className="left">
        <h1>{author}</h1>
        <h5>{quote}</h5>
      </div>
    </div>
  );
};

export default AxiosPractice;
