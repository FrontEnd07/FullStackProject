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
        ...rest
    } = props;

    return (
        <div className={style.main}>
            <Controller
                name={rest.name}
                control={rest.control}
                defaultValue={''}
                render={({ field }) => (
                    <TextField
                        type={type}
                        onChange={onChange}
                        variant="outlined"
                        error={!!errors[rest.name]}
                        label={rest.label}
                        {...field}
                    />
                )}
            />
            {errors[rest.name] && (
                <p className={style.error}>Поля обязательные для заполнения</p>
            )}
        </div>
    );
}

