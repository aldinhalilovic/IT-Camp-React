import React, { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";
import "./PostList.css";

const PostList = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((el) => el.json())
      .then((prev) => setData(prev));
  }

  useEffect(() => getData, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default PostList;
