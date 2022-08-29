import React, { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";
import "./PostList.css";

const PostList = () => {
  const [data, setData] = useState([]);

  function getData() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((el) => el.json())
      .then((prev) => setData(prev));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div>
        {data.map((el) => {
          return <PostItem key={el.id} title={el.title} body={el.body} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
