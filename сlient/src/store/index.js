import { configureStore } from "@reduxjs/toolkit";
import Admin from './Reducers/Admin'

export const store = configureStore({
    reducer: {
        Admin
    },
    devTools: true
})

window.store = store;