import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => navigate("/team")}>Go to TeamPage</button>
      {/* <Box
        sx={{
          width: "100vw",
          // height: "90vh",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Card
          sx={{ maxWidth: 345, mt: 3 }}
          onClick={() => navigate("/home/maverick")}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://www.thefilmik.com/wp-content/uploads/2022/04/Top-Gun-2-Movie.webp"
              alt="top gun"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Top Gun: Maverick
              </Typography>
              <Typography variant="body2" color="text.secondary">
                After thirty years, Maverick is still pushing the envelope as a
                top naval aviator, but must confront ghosts of his past when he
                leads TOP GUN's elite graduates on a mission that demands the
                ultimate sacrifice from those chosen to fly it.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, mt: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Everything_Everywhere_All_at_Once.jpg/220px-Everything_Everywhere_All_at_Once.jpg"
              alt="everything"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Everything Everywhere All at Once
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An aging Chinese immigrant is swept up in an insane adventure,
                in which she alone can save the world by exploring other
                universes connecting with the lives she could have led.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, mt: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://m.media-amazon.com/images/M/MV5BOWE1MWE3ZDktOThlZS00ZmRiLWE4ZGEtNWJkMTVlZjdhZDIyXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg"
              alt="everything"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Godfather
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The aging patriarch of an organized crime dynasty in postwar New
                York City transfers control of his clandestine empire to his
                reluctant youngest son.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, mt: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://m.media-amazon.com/images/M/MV5BMDBlMDYxMDktOTUxMS00MjcxLWE2YjQtNjNhMjNmN2Y3ZDA1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
              alt="everything"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Prey
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Naru, a skilled warrior of the Comanche Nation, fights to
                protect her tribe against one of the first highly-evolved
                Predators to land on Earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Button
        variant="contained"
        onClick={() => navigate("/team")}
        sx={{ m: 4, alignSelf: "flex-end" }}
      >
        Go to list
      </Button> */}
      <h1>kjadsklsajdlk</h1>
    </div>
  );
};

export default HomePage;
