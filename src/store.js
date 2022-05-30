import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/userSlice'
import statusReducer from './Slices/statusSlice'
import bagReducer from './Slices/bagSlice'
import buyReducer from './Slices/buySlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        status: statusReducer,
        bag: bagReducer,
        buy: buyReducer
    }
});