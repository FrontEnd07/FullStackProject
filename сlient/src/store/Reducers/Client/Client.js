import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    emailUser: null,
    IOrder: null,
    LPOrder: false,
    POrder: null
}

const Client = createSlice({
    name: 'PostList',
    initialState,
    reducers: {
        isLoadingAc(state, action) {
            state.isLoading = action.payload
        },
        emailUserAc(state, action) {
            state.emailUser = action.payload
        },
        IOrderAc(state, action) {
            state.IOrder = action.payload
        },
        LPOrderAc(state, action) {
            state.LPOrder = action.payload
        },
        POrderAc(state, action) {
            state.POrder = action.payload
        }
    }
})

export const {
    isLoadingAc,
    emailUserAc,
    IOrderAc,
    LPOrderAc,
    POrderAc
} = Client.actions
export default Client.reducer