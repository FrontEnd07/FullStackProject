import React from 'react';
import style from "./Admin.module.scss";
import { NavLink, Route, Routes } from "react-router-dom";
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Card, Order, Create } from "./index"


const Admin = () => {
    return (
        <div className={style.main}>
            <ButtonGroup variant="contained" className={style.ButtonGroup} aria-label="outlined primary button group">
                {[
                    { title: 'Список товаров', link: "/admin", exact: false },
                    { title: 'Заказы', link: "/admin/order", exact: false },
                    { title: 'Список товаров', link: "/admin/create", exact: false }
                ].map((el, i) => <ListItem button key={i} component={NavLink} to={el.link} end>
                    {el.title}
                </ListItem>
                )}
            </ButtonGroup>
            <Routes>
                <Route path='/' element={<Card />} />
                <Route path='/order' element={<Order />} />
                <Route path='/create' element={<Create />} />
            </Routes>
        </div>
    );
}

export default Admin;
