// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";

// const TeamPage = () => {
//   const navigate = useNavigate();
//   // const location = useLocation();
//   // console.log(location.state);

//   return (
//     <div>
//       {/* <ol>
//         <li>smlksl</li>
//         <li>The Shawshank Redemption (1994) 9.2.</li>
//         <li> The Godfather (1972) 9.2.</li>
//         <li>The Dark Knight (2008) 9.0. </li>
//         <li>12 AngryMen (1957) 8.9.</li>
//         <li>Schindler's List (1993) 8.9.</li>
//         <li>The Lord of the Rings: The Return of the King (2003) 8.9. </li>
//         <li>Pulp Fiction (1994) 8.8.</li>
//       </ol>
//       <Button variant="outlined" onClick={() => navigate("/home")}>
//         Go back to Home Page
//       </Button> */}
//       <h1>lkadjaklsdjklajslk</h1>
//       {/* <h1>{location.state.name}</h1> */}
//     </div>
//   );
// };

// export default TeamPage;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";

const TeamPage = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const color = useContext(Context);

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(res.data.splice(0, 3));
    console.log(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {user.map((el) => {
        return (
          <div
            key={el.id}
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
            <h1>{el.name}</h1>
            <h2>{el.username}</h2>
            <h3>{el.phone}</h3>

            <button
              style={{
                marginTop: "100px",
                width: "100px",
                height: "50px",
              }}
              onClick={() => navigate(`/team/${el.id}`)}
            >
              Click for more
            </button>
          </div>
        );
      })}
      {color.color}
    </div>
  );
};

export default TeamPage;
