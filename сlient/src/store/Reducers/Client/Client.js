import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    emailUser: null
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
        }
    }
})

export const {
    isLoadingAc,
    emailUserAc
} = Client.actions
export default Client.reducer