import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './NormalCard.css'

export default function NormalCard(props) {
    const card = (
        <React.Fragment>
            <CardContent>

                <Typography variant="h5" component="div" id="title">
                    {props.cause.title}
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="body2">
                    {props.cause.description}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    return (
        <div className="card-container">
            <div>
                <Box sx={{ minWidth: 275 }} id="card-box">
                    <Card variant="outlined">{card}</Card>
                </Box>
            </div>


        </div >
    );
}