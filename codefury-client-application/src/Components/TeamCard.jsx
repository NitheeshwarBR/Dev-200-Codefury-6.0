import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Cropped_Image from "./Cropped_Image.png";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{ maxWidth: 345, position: "relative", left: "250px", top: "80px" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Cropped_Image}
          alt="Niteeshwar"
          style={{
            objectFit: "cover",
            width: "80%",
            height: "80%",
          }}
          sx={{
            position: "relative",
            left: "40px",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Niteeshwar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
