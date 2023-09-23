import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ImageCards(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.feature.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {props.feature.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {props.feature.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
