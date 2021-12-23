import { $host } from "@http";


export const postCreateApi = (payload) => async dispatch => {
    try {

        const formData = new FormData()
        formData.append('heading', payload.heading)
        formData.append('descriptions', payload.descriptions)
        formData.append('remainder', payload.remainder)
        formData.append('price', payload.price)
        formData.append('picture', payload.picture[0])

        const { data } = await $host({
            method: "post",
            url: "api/product",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })

        console.log("data", data)
    } catch (e) {
        console.log(e.message)
    }
};