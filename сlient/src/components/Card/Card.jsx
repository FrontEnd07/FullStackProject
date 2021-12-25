import React from 'react';
import style from "./Card.module.scss";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router-dom";

export const CardItem = ({ data, deleteHendler, changeProduct, type, deleteB, changeB }) => <Grid container className={style.main} spacing={{ xs: 2, sm: 2, md: 1 }} columns={{ xs: 4, sm: 12, md: 12 }}>
    {data ? data.map((el) => <Grid item xs={2} sm={4} md={3} key={el.id}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                className={style.image}
                component="img"
                alt={el.heading}
                image={`${process.env.REACT_APP_API_URL}${el.picture}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {el.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {el.descriptions}
                </Typography>
                <Typography className={style.CPTypography} variant="body2" color="text.secondary">
                    <span>{el.price}Цена</span>
                    <span>{el.remainder}Кол-во</span>
                </Typography>
            </CardContent>
            <CardActions>
                {type === "admin" &&
                    <>
                        <Button onClick={() => changeProduct(el.id)} size="small" disabled={changeB}>Изменит</Button>
                        <Button onClick={() => deleteHendler(el.id)} size="small" disabled={deleteB}>Удалить</Button>
                    </>
                }
                {type === "client" &&
                    <Button component={Link} to={`/order/${el.id}`} fullWidth>Заказать</Button>
                }
            </CardActions>
        </Card >
    </Grid>
    ) : <>
        {Array.from(Array(8)).map((_, i) => <Grid item xs={2} sm={4} md={3} key={i}>
            <Skeleton variant="rectangular" height={210} />
            <Skeleton />
            <Skeleton width="60%" />
        </Grid>
        )}
    </>}
</Grid>
