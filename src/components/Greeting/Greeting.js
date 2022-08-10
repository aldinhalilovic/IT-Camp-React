import React from "react";

// const styles = ;
//  const {name,children} = props
const Greeting = (props) => {
  const { name, children, fontSize } = props;
  return (
    <div>
      {children}
      <h3
        style={{
          color: "blue",
          fontSize: fontSize,
        }}
      >
        Hello, {name}
      </h3>
      <p>How are you</p>
    </div>
  );
};

export default Greeting;

// export default function Greeting () {}

// fucnstio Greeting() {}
// export default Greeting;
