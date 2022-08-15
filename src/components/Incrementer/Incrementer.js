import React from "react";

export default function Incrementer() {
  const [number, setNumber] = React.useState(0);
  const numberDecrease = () => {
    setNumber((prev) => prev - 1);
  };
  const numberIncrease = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={numberDecrease} disabled={number === 0}>
        {" "}
        -{" "}
      </button>
      {number}
      <button onClick={numberIncrease}> +</button>
      {/* <button onClick = {() => setCount ((prev) prev + 1)} */}
    </div>
  );
}

// STATE I PROPS !!!!!!!!
