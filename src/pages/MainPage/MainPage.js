import React, { useContext, useState } from "react";
import { PrimerContext, UserContext } from "../../App";
import "./MainPage.css";

function MainPage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Main Page</h1>
      <button>{user.name === "" ? "Log in" : "Log out"}</button>

      {user.name === "" ? <h1>Niste Ulogovani</h1> : <h1>Ulogovani ste</h1>}
    </div>
  );
}

export default MainPage;
