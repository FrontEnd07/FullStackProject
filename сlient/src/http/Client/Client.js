import { $host } from "@http";
import { isLoadingAc, emailUserAc } from "@store/Reducers/Client"
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