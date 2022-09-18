import React, { useContext, useState } from "react";
import { Context } from "../../App";
import "./MainPage.css";

function MainPage() {
  const color = useContext(Context);
  const [content, setContent] = useState(color);

  return (
    <div
      className="container"
      style={{
        backgroundColor: content,
      }}
    >
      <h1>MAIN PAGE</h1>
      <br />
      <h1>Context is: {content} </h1>
      <br />
      <button onClick={() => setContent("red")}>
        <strong>Click me!</strong>
      </button>
    </div>
  );
}

export default MainPage;
