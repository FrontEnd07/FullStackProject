import React from 'react';
import style from "./Client.module.scss";
import { Route, Routes } from "react-router-dom";
import { Card, Order, Customer } from "./index"

const Client = () => {


    return (
        <div className={style.main}>
            <Routes>
                <Route path='/' element={<Card />} />
                <Route path='/login' element={<Customer />} />
                <Route path='/order/:id' element={<Order />} />
            </Routes>
        </div>
    );
}

export default Client;
