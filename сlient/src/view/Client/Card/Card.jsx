import React, { useEffect } from 'react';
import style from "./Card.module.scss";
import { getAllApi } from "@http/Admin";
import { CardItem } from "@components/Card"
import { useDispatch, useSelector } from "react-redux";
import { POrderAc } from "@store/Reducers/Client"
import { getAllAc } from "@store/Reducers/Admin"

const Card = () => {

    const dispatch = useDispatch()
    let { items } = useSelector(state => state.Admin)

    useEffect(() => {
        dispatch(POrderAc(null))
        dispatch(getAllApi());
        return () => dispatch(getAllAc(null))
    }, [])

    if (items === "Нет товаров!") return <div className={style.main}>
        Нет товаров!
    </div>

    return (
        <div className={style.main}>
            <CardItem
                data={items}
                type="client"
            />
        </div>
    );
}

export default Card;
