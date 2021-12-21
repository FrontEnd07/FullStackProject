import React from 'react';
import style from "./Card.module.scss";
import { CardItem } from "@components/Card"


const Card = () => {
    return (
        <div className={style.main}>
            <CardItem />
        </div>
    );
}

export default Card;
