import React, { useRef } from 'react';
import style from "./Create.module.scss";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LFeild } from "@components/LFeild";
import Button from '@mui/material/Button';

const schema = yup.object().shape({
    heading: yup.string().required('empty'),
    descriptions: yup.string().required('empty'),
    remainder: yup.number().required('empty'),
    price: yup.number().required('empty'),
    picture: yup.mixed().required('empty'),
});

const Create = () => {


    const {
        handleSubmit,
        control,
        register,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const inputFile = useRef(null);

    const handlerSubmit = data => {
        console.log(data)
    };

    console.log(errors)

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
                            ref={inputFile}
                            id="picture"
                            // {...register('picture', { required: true })}
                            type="file"
                            name="picture"
                            hidden
                        />
                    </Button>
                    {errors.picture && (
                        <p className={style.error}>Поля обязательные для заполнения</p>
                    )}
                </div>
            </div>
            <div className={style.button}>
                <Button onClick={handleSubmit(handlerSubmit)}>
                    Добавить
                </Button>
            </div>
        </div>
    );
}

export default Create;
