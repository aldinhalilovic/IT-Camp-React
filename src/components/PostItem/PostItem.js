import React from "react";
import "./PostItem.css";

const PostItem = ({ title, body }) => {
  return (
    <div className="item">
      <h1> {title}</h1>
      <h2>Description: {body}</h2>
    </div>
  );
};

export default PostItem;
