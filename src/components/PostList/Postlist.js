import React, { useEffect, useState } from "react";
import "./PostList.css";

const PostList = () => {
  const [data, setData] = useState({});

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((el) => el.json())
      .then((el) => console.log(el));
  }

  useEffect(() => getData(), []);
  useEffect(() => setData(getData), []);
  console.log(data);
  return (
    <div>
      <h1>Aldin</h1>{" "}
    </div>
  );
};

export default PostList;
