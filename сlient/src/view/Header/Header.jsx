import React, { useEffect } from 'react';
import style from './Header.module.scss';
import Logo from "@assets/Header/Logo.png";
import { Link } from "react-router-dom";
import { emailUserAc } from "@store/Reducers/Client"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {

    const dispatch = useDispatch()
    const { emailUser } = useSelector(state => state.Client)

    useEffect(() => {

        const about = localStorage.getItem('about')
        const jwtToken = localStorage.getItem('jwtToken')

        if (jwtToken && about) {
            dispatch(emailUserAc(about))
        }
        return () => { }
    }, [])

    return (
        <div className={style.main}>
            <div className={style.container}>
                <nav>
                    <div className={style.logo}>
                        <Link to="/">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className={style.auth}>
                        <Link to="/login">{emailUser ? emailUser : "Вход"}</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
