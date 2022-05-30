import { createSlice } from '@reduxjs/toolkit'

export const bagSlice = createSlice({

    name: "bag",
    initialState: [],
    reducers: {

        addProduct: (state, action) => {
            state.push(action.payload);
        },

        removeProduct: (state, action) => {
            let idx = state.findIndex(obj => obj.id === action.payload.id);
            state.splice(idx, 1);
        },

        updateProduct: (state, action) => {
            action.payload.forEach(obj => state.push(obj));
        },

        updateQuantity: (state, action) => {

            let idx = state.map(obj => {
                if (obj.id == action.payload.id)
                    obj.quantity = action.payload.quantity;

            })

        }

    }
})

export const { addProduct, removeProduct, updateProduct, updateQuantity } = bagSlice.actions;
export default bagSlice.reducer;