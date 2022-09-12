import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

const TeamPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      {/* <ol>
        <li>smlksl</li>
        <li>The Shawshank Redemption (1994) 9.2.</li>
        <li> The Godfather (1972) 9.2.</li>
        <li>The Dark Knight (2008) 9.0. </li>
        <li>12 AngryMen (1957) 8.9.</li>
        <li>Schindler's List (1993) 8.9.</li>
        <li>The Lord of the Rings: The Return of the King (2003) 8.9. </li>
        <li>Pulp Fiction (1994) 8.8.</li>
      </ol>
      <Button variant="outlined" onClick={() => navigate("/home")}>
        Go back to Home Page
      </Button> */}
      <h1>lkadjaklsdjklajslk</h1>
      <h1>{location.state.name}</h1>
    </div>
  );
};

export default TeamPage;
