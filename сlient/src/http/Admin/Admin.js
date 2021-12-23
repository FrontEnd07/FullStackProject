import { $host } from "@http";


export const postCreateApi = (payload) => async dispatch => {
    try {
        
        const { data } = await $host({
            method: "post",
            url: "api/product",
            data: payload,
            headers: { "Content-Type": "multipart/form-data" },
        })

        console.log("data", data)
    } catch (e) {
        console.log(e.message)
    }
};