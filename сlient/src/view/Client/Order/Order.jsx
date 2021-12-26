import React, { useEffect } from 'react';
import style from "./Order.module.scss";
import { useDispatch, useSelector } from "react-redux"
import { getOneProductApi, postAddOrderApi } from "@http/Client";
import { IOrderAc } from "@store/Reducers/Client"
import { useParams, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Order = () => {

    const dispatch = useDispatch()
    const { id } = useParams();
    const { IOrder, emailUser, LPOrder, POrder } = useSelector(state => state.Client)

    useEffect(() => {
        dispatch(getOneProductApi(id))
        return () => dispatch(IOrderAc(null))
    }, [])

    const orderHendler = () => {
        if (emailUser) {
            dispatch(postAddOrderApi({ id: IOrder.id, email: emailUser }))
        } else {
            alert("Авторизуйтесь пожалуйста!")
        }
    }

    if (!IOrder) return <div>
        загрузка...
    </div>

    if (POrder !== null) return <Navigate to="/" />

    return (
        <div className={style.main}>
            <Grid item xs={2} sm={4} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        className={style.image}
                        component="img"
                        alt={IOrder.heading}
                        image={`${process.env.REACT_APP_API_URL}${IOrder.picture}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {IOrder.heading}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {IOrder.descriptions}
                        </Typography>
                        <Typography className={style.CPTypography} variant="body2" color="text.secondary">
                            <span>{IOrder.price}Цена</span>
                            <span>1 кол-во</span>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button disabled={LPOrder} onClick={() => orderHendler()} fullWidth>Заказать</Button>
                    </CardActions>
                </Card >
            </Grid>
        </div>
    );
}

export default Order;
