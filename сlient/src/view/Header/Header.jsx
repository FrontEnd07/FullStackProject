import React from 'react';
import style from './Header.module.scss';
import Logo from "@assets/Header/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <nav>
                    <div className={style.logo}>
                        <Link to="/">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <div>Account</div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
