import React, { useEffect } from 'react';
import style from "./Order.module.scss";
import { getAllOrderApi } from "@http/Admin"
import { orderAc } from "@store/Reducers/Admin"
import { useDispatch, useSelector } from "react-redux"
import Typography from '@mui/material/Typography';

const Order = () => {

    const dispatch = useDispatch()
    const { order } = useSelector(state => state.Admin)

    useEffect(() => {
        dispatch(getAllOrderApi())
        return () => dispatch(orderAc(null))
    }, [])

    console.log(order)

    if (order === null) return <div>
        Заргузка...
    </div>

    if (order.length === 0) return <div>
        Заказов нет!
    </div>

    return (
        <div className={style.main}>
            {order.map(el => <div key={el.id}>
                <Typography gutterBottom variant="h4" component="div">
                    id товара: {el.product}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                    Покупатель: {el.email}
                </Typography>
            </div>
            )}
        </div>
    );
}

export default Order;
