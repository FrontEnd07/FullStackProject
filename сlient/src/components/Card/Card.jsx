import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardItem = ({ data }) => {

    return (
        <Grid container spacing={{ xs: 2, sm: 2, md: 1 }} columns={{ xs: 4, sm: 12, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={3} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image="https://gw.alicdn.com/bao/uploaded/i1/1030556691/O1CN01qSgyJU1zIWe99Nk5Q_!!1030556691.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card >
                </Grid>
            ))}
        </Grid>
    );
}

