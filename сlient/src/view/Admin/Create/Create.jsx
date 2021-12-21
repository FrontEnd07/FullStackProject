import React from 'react';
import style from "./Create.module.scss";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LFeild } from "@components/LFeild";

const schema = yup.object().shape({
    heading: yup.string().required('empty'),
    descriptions: yup.string().required('empty'),
    remainder: yup.number().required('empty'),
    price: yup.number().required('empty'),
    image: yup.object().shape({
        name: yup.string().required()
    }).label('File'),
});

const Create = () => {
    const {
        handleSubmit,
        control,
        getValues,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const handlerSubmit = data => {
        console.log(data)
    };
    return (
        <div className={style.main}>
            <div className={style.form}></div>
            <div className={style.button}></div>
        </div>
    );
}

export default Create;
