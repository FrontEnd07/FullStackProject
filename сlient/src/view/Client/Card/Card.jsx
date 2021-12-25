import React, { useEffect } from 'react';
import style from "./Card.module.scss";
import { Link } from 'react-router-dom';
import { getAllApi } from "@http/Admin";
import { CardItem } from "@components/Card"
import { useDispatch, useSelector } from "react-redux";

const Card = () => {

    const dispatch = useDispatch()
    let { items } = useSelector(state => state.Admin)

    useEffect(() => {
        dispatch(getAllApi());
        return () => { }
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
