import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


function TeamCard(props) {
    return (
        <Card
          sx={{ maxWidth: 700, position: "relative", left: "250px", top: "80px"}}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.image}
              alt={props.alt}
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
                {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default TeamCard
