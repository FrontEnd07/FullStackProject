import { configureStore } from "@reduxjs/toolkit";
import Admin from './Reducers/Admin'
import Client from './Reducers/Client'

export const store = configureStore({
    reducer: {
        Admin,
        Client
    },
    devTools: true
})

window.store = store;