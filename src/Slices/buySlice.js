import { createSlice } from '@reduxjs/toolkit'

export const buySlice = createSlice({

    name: "buyProduct",
    initialState: {},
    reducers: {
        buyPhone: (state, action) => {
            Object.assign(state, action.payload)
        },

        Addfeatures: (state, action) => {
            Object.assign(state, state, action.payload);
        }
    }
});

export const { buyPhone, Addfeatures } = buySlice.actions;
export default buySlice.reducer;