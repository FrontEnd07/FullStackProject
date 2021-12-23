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
                    { title: 'Список товаров', link: "/admin" },
                    { title: 'Заказы', link: "/admin/order" },
                    { title: 'Добавить товары', link: "/admin/create" }
                ].map((el, i) => <ListItem
                    button
                    end
                    key={i}
                    component={NavLink}
                    to={el.link}
                    style={({ isActive }) => {
                        return {
                            background: isActive ? "rgb(40 37 34 / 47%)" : "",
                            color: isActive ? "white" : ""
                        };
                    }}>
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
