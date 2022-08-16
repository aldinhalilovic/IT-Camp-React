import React from "react";
import Title from "../Title/Title";

// const styles = ;
//  const {name,children} = props
// const Greeting = ({ name, children, fontSize }) => {
const Greeting = ({ handleParentClick }) => {
  const sayWelcome = (name) => {
    alert(`Welcome ${name}`);
  };
  return (
    <div>
      {/* {children}

      <h3
        onClick={() => sayWelcome(name)}
        style={{
          color: "blue",
          fontSize: fontSize,
        }}
      >
        Hello, {name}
      </h3>
      <p>How are you</p> */}
      <button onClick={handleParentClick}>Greeting</button>
    </div>
  );
};

export default Greeting;

// export default function Greeting () {}

// fucnstio Greeting() {}
// export default Greeting;
