import React from "react";

const PostItem = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
    </div>
  );
};

export default PostItem;
