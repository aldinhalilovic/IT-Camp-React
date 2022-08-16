import React from "react";
import Greeting from "../Greeting/Greeting";

export default function Practice({ clickHandler }) {
  return (
    <div>
      <button onClick={clickHandler}>Practice</button>
      <Greeting handleParentClick={clickHandler} />
    </div>
  );
}
