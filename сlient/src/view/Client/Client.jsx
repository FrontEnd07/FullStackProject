import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Order from "./Order"

const Client = () => {
    return (
        <div>
            <Link to="/order">
                Админ
            </Link>
            <Routes>
                <Route path='/order' element={<Order />} />
            </Routes>
        </div>
    );
}

export default Client;
