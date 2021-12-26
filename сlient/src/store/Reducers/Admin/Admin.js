import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createB: false,
    items: null,
    deleteB: false,
    createAdd: false,
    oneProduct: null,
    changeB: false,
    redirect: false,
    order: null
}

const Admin = createSlice({
    name: 'PostList',
    initialState,
    reducers: {
        createAc(state, action) {
            state.createB = action.payload
        },
        createAddAc(state, action) {
            state.createAdd = action.payload
        },
        getAllAc(state, action) {
            state.items = action.payload
        },
        getOneProductAc(state, action) {
            state.oneProduct = action.payload
        },
        changeBAc(state, action) {
            state.changeB = action.payload
        },
        redirectAc(state, action) {
            state.redirect = action.payload
        },
        deleteProductAc(state, action) {
            state.deleteB = action.payload
        },
        orderAc(state, action) {
            state.order = action.payload
        }
    }
})

export const {
    createAc,
    getAllAc,
    deleteProductAc,
    createAddAc,
    getOneProductAc,
    changeBAc,
    redirectAc,
    orderAc
} = Admin.actions
export default Admin.reducer