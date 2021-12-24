import React, { useEffect, useState } from 'react';
import style from "./Card.module.scss";
import { CardItem } from "@components/Card"
import { getAllApi, deleteProductApi, getOneProductApi } from "@http/Admin";
import { getAllAc, getOneProductAc } from "@store/Reducers/Admin"
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Card = () => {
    const dispatch = useDispatch()
    let { items, deleteB, oneProduct, changeB, redirect } = useSelector(state => state.Admin)

    useEffect(() => {
        dispatch(getAllApi());
        oneProduct && dispatch(getOneProductAc(null))
        return () => dispatch(getAllAc(null));
    }, [])

    const deleteHendler = (id) => dispatch(deleteProductApi(id));
    const changeProduct = (id) => dispatch(getOneProductApi(id));

    if (redirect) return <Navigate to="/admin/create" />

    if (items === "Нет товаров!") return <div className={style.main}>
        Нет товаров!
    </div>

    return (
        <div className={style.main}>
            <CardItem
                data={items}
                type="admin"
                deleteHendler={deleteHendler}
                changeProduct={changeProduct}
                changeB={changeB}
                deleteB={deleteB} />
        </div>
    );
}

export default Card;
