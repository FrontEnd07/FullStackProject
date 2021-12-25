import React, { useState } from 'react';
import style from "./Customer.module.scss"
import { LFeild } from "@components/LFeild";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useDispatch, useSelector } from "react-redux"
import { postRegistrApi, postLoginApi } from "@http/Client";
import { emailUserAc } from "@store/Reducers/Client"

const schema = yup.object().shape({
    email: yup.string().email().required('empty'),
    pass: yup.string().required('empty'),
});

const Customer = () => {

    const dispatch = useDispatch();
    const [typeLogin, setTypeLogin] = useState("Войти");
    const { isLoading, emailUser } = useSelector(state => state.Client)

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const handlerSubmit = data => {
        if (typeLogin === "Войти") {
            dispatch(postLoginApi(data))
        } else {
            dispatch(postRegistrApi(data))
        }
    };

    const handleChange = (event) => {
        setTypeLogin(event.target.value);
    };

    const logout = () => {
        localStorage.removeItem("about")
        localStorage.removeItem("jwtToken")
        dispatch(emailUserAc(null))
    }

    if (emailUser) return <div className={style.logout}>
        <span>{emailUser}</span>
        <span onClick={() => logout()}>Выход</span>
    </div>

    return (
        <div className={style.main}>
            <div className={style.form}>
                <div>
                    <Typography gutterBottom variant="h5" component="div">
                        {typeLogin}
                    </Typography>
                </div>
                <div>
                    <LFeild
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div>
                    <LFeild
                        id="pass"
                        name="pass"
                        label="Пароль"
                        type="text"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div className={style.info}>
                    <div>
                        <RadioGroup
                            aria-label="gender"
                            name="controlled-radio-buttons-group"
                            value={typeLogin}
                            onChange={handleChange}
                        >
                            {["Войти", "Регистрация"].map((el, i) => <FormControlLabel key={i} value={el} control={<Radio />} label={el} />)}
                        </RadioGroup>
                    </div>
                    <div>
                        <Button disabled={isLoading} onClick={handleSubmit(handlerSubmit)}>
                            {typeLogin}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customer;
