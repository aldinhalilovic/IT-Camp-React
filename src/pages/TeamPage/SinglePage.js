import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePage() {
  const { id } = useParams();
  const [singleUser, setSingelUser] = useState({});

  const navigate = useNavigate();

  const getSingleUser = async (id) => {
    const user = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setSingelUser(user.data);
  };

  useEffect(() => {
    getSingleUser(id);
  }, [id]);

  return (
    <div>
      {singleUser ? (
        <div
          style={{
            backgroundColor: "grey",
            width: "30vw",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{singleUser?.name}</h1>
          <h2>{singleUser?.username}</h2>
          <h3>{singleUser?.phone}</h3>
          <h3>{singleUser?.email}</h3>
        </div>
      ) : (
        <h1>loading...</h1>
      )}

      <button onClick={() => navigate("/team")}>
        <strong> Go back ?</strong>
      </button>
    </div>
  );
}
