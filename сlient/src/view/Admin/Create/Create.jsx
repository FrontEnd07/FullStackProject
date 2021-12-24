import React, { useEffect } from 'react';
import style from "./Create.module.scss";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LFeild } from "@components/LFeild";
import Button from '@mui/material/Button';
import { Navigate } from "react-router-dom";
import { postCreateApi, postUpdateApi } from "@http/Admin";
import { createAddAc, redirectAc } from "@store/Reducers/Admin"
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
    heading: yup.string().required('empty'),
    descriptions: yup.string().required('empty'),
    remainder: yup.number().required('empty').integer(),
    price: yup.number().required('empty'),
    picture: yup.mixed().required('empty')
        .test("FileList", "image", (value) => {
            return value.length > 0 ? value[0].size < 2000000 : null
        }),
});

const Create = () => {

    const dispatch = useDispatch()
    let { createB, createAdd, oneProduct } = useSelector(state => state.Admin)

    let defaultValue;

    if (oneProduct) {
        defaultValue = {
            heading: oneProduct.heading,
            descriptions: oneProduct.descriptions,
            remainder: oneProduct.remainder,
            price: oneProduct.price,
        }
    }

    const {
        handleSubmit,
        control,
        register,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: oneProduct && defaultValue
    });

    useEffect(() => {
        dispatch(redirectAc(false))
        return () => dispatch(createAddAc(false))
    }, [])

    const handlerSubmit = data => {
        const formData = new FormData()
        formData.append('heading', data.heading)
        formData.append('descriptions', data.descriptions)
        formData.append('remainder', data.remainder)
        formData.append('price', data.price)
        formData.append('picture', data.picture[0])

        if (oneProduct) {
            formData.append('id', oneProduct.id)
            dispatch(postUpdateApi(formData))
        } else {
            dispatch(postCreateApi(formData))
        }
    };

    if (createAdd) return <Navigate to="/admin" />

    return (
        <div className={style.main}>
            <div className={style.form}>
                <div>
                    <LFeild
                        id="heading"
                        name="heading"
                        onChange=""
                        label="Наименования"
                        type="text"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div>
                    <LFeild
                        id="descriptions"
                        name="descriptions"
                        onChange=""
                        label="Описания"
                        type="text"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div>
                    <LFeild
                        id="remainder"
                        name="remainder"
                        onChange=""
                        label="Остаток"
                        type="number"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div>
                    <LFeild
                        id="price"
                        name="price"
                        onChange=""
                        label="Цена"
                        type="text"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div>
                    <Button variant="contained" component="label">
                        Upload File
                        <input
                            id="picture"
                            {...register('picture')}
                            type="file"
                            hidden
                        />
                    </Button>
                    {errors.picture && (
                        <p className={style.error}>Поля обязательные для заполнения</p>
                    )}
                </div>
            </div>
            <div className={style.button}>
                <Button disabled={createB} onClick={handleSubmit(handlerSubmit)}>
                    Добавить
                </Button>
            </div>
        </div>
    );
}

export default Create;
