import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    create: null,
}

const Admin = createSlice({
    name: 'PostList',
    initialState,
    reducers: {
        createAc(state, action) {
            state.create = action.payload
        }
    }
})

export const {
    createAc,
} = Admin.actions
export default Admin.reducer