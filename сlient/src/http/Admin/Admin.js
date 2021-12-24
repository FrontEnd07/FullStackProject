import { $host } from "@http";
import {
    getAllAc,
    createAc,
    deleteProductAc,
    createAddAc,
    getOneProductAc,
    changeBAc,
    redirectAc
} from "@store/Reducers/Admin"

export const postCreateApi = (payload) => async dispatch => {
    try {
        dispatch(createAc(true))
        const { data } = await $host({
            method: "post",
            url: "api/product",
            data: payload,
            headers: { "Content-Type": "multipart/form-data" },
        })
        dispatch(createAc(false))
        dispatch(createAddAc(true))
    } catch (e) {
        console.log(e.message)
    }
};

export const getAllApi = () => async dispatch => {
    try {
        const { data } = await $host.get(`api/product`);
        dispatch(getAllAc(data))
    } catch (e) {
        console.log(e.message)
    }
};

export const getOneProductApi = (id) => async dispatch => {
    dispatch(changeBAc(true))
    try {
        const { data } = await $host.get(`api/product/${id}`);
        dispatch(getOneProductAc(data))
        dispatch(changeBAc(false))
        dispatch(redirectAc(true))
    } catch (e) {
        console.log(e.message)
    }
};

export const postUpdateApi = (payload) => async dispatch => {
    dispatch(createAc(true))
    try {
        const { data } = await $host({
            method: "put",
            url: "api/product",
            data: payload,
            headers: { "Content-Type": "multipart/form-data" },
        })
        dispatch(createAc(false))
        dispatch(createAddAc(true))
    } catch (e) {
        console.log(e.message)
    }
}

export const deleteProductApi = (id) => async dispatch => {
    dispatch(deleteProductAc(true))
    try {
        const { data } = await $host.delete(`api/product/${id}`);
        dispatch(deleteProductAc(false))
        dispatch(getAllAc(null))
        dispatch(getAllApi())
    } catch (e) {
        console.log(e.massage)
    }
}