import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "green",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Ovo je Home Page</h1>
      <h2>Klikom na dugme odredjeno,dosli smo do ovde sa pathom /home</h2>
    </div>
  );
};

export default HomePage;
