import React from 'react'
import { Client, Admin } from "@view";

export const useRouter = (roles) => {

    if (roles === 'client') {
        return <Client />
    }

    if (roles === 'admin') {
        return <Admin />
    }

}