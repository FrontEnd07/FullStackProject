import React from 'react';
import style from "./LFeild.module.scss";
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export const LFeild = props => {

    const {
        errors,
        appClassName,
        type,
        onChange,
        inputRef,
        max,
        ...rest
    } = props;

    return (
        <div className={style.main}>
            <Controller
                name={rest.name}
                control={rest.control}
                render={({ field }) => (
                    <TextField {...field}
                        id="outlined-basic"
                        label="Outlined"
                        type={type}
                        onChange={onChange}
                        variant="outlined"
                        error={!!errors[rest.name]}
                        label={rest.label}
                    />
                )}
            />
            {errors[rest.name] && (
                <p className={style.error}>Поля обязательные для заполнения</p>
            )}
        </div>
    );
}

