import React from 'react';
import style from "./Client.module.scss";
import { Route, Routes } from "react-router-dom";
import Order from "./Order"
import Card from "./Card"

const Client = () => {
    return (
        <div className={style.main}>
            <Routes>
                <Route path='/' element={<Card />} />
                <Route path='/order' element={<Order />} />
            </Routes>
        </div>
    );
}

export default Client;
