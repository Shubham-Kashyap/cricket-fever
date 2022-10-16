import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        authReducer: dataReducer,
    },
})