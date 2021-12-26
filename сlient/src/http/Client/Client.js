import { $host } from "@http";
import { isLoadingAc, emailUserAc, IOrderAc, LPOrderAc, POrderAc } from "@store/Reducers/Client"

export const postRegistrApi = (payload) => async dispatch => {
    dispatch(isLoadingAc(true))
    try {
        const { data } = await $host.post(`api/user`, payload);
        const { email, token } = data
        dispatch(isLoadingAc(false))
        if (email) {
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('about', email)
            dispatch(emailUserAc(email))
        }
    } catch (e) {
        console.log(e.message)
    }
}

export const postLoginApi = (payload) => async dispatch => {
    dispatch(isLoadingAc(true))
    try {
        const { data } = await $host.post(`api/user/login`, payload);
        const { email, token } = data
        dispatch(isLoadingAc(false))
        if (email) {
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('about', email)
            dispatch(emailUserAc(email))
        }
    } catch (e) {
        console.log(e.message)
    }
}

export const getOneProductApi = (id) => async dispatch => {
    try {
        const { data } = await $host.get(`api/product/${id}`)
        dispatch(IOrderAc(data))
    } catch (e) {
        console.log(e.message)
    }
}

export const postAddOrderApi = (payload) => async dispatch => {
    try {
        dispatch(LPOrderAc(true));
        const { data } = await $host.post(`api/order/add`, payload)
        dispatch(LPOrderAc(false));
        dispatch(POrderAc(data))
    } catch (e) {
        console.log(e.message)
    }
}