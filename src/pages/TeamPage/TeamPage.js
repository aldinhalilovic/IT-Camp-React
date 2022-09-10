import React from "react";
import { useNavigate } from "react-router-dom";

const TeamPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Ovo je Team Page</h1>
      <h2>Dosli smo ovde pomocu rendera, ruth-om /team /</h2>
      <button onClick={() => navigate("/home")}>Go to Home Page</button>
    </div>
  );
};

export default TeamPage;
