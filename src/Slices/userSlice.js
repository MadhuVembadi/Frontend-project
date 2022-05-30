import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const userSlice = createSlice({
    name: "userActive",
    initialState: {},
    reducers: {
        addUser: (state, action) => {
            Object.assign(state, action.payload);
        },
        removeUser: (state, action) => {
            for (var member in state) delete state[member];
        },
        updateBag: (state, action) => {
            state.bag = [...state.bag, action.payload]
            axios.put('http://localhost:5000/users/' + state.id, state);
        },
        removeProductBag: (state, action) => {

            let idx = state.bag.findIndex(obj => obj.id === action.payload.id);
            state.bag.splice(idx, 1);

            axios.put('http://localhost:5000/users/' + state.id, state)

        },
        updateProductQuantity: (state, action) => {

            state.bag.map(obj => {
                if (obj.model === action.payload.model) {
                    obj.quantity = action.payload.quantity;
                }
            })

            axios.put('http://localhost:5000/users/' + state.id, state)
        },

        updateOrders: (state, action) => {

            action.payload.forEach((order) => {
                let obj = {};
                Object.assign(obj, order);
                obj["orderID"] = Math.floor((Math.random() * 1000000) + 1);
                state.orders.push(obj);
            })
            state.bag = [];
            axios.put('http://localhost:5000/users/' + state.id, state);
        },

        deleteOrder: (state, action) => {

            let index = state.orders.findIndex((obj) => obj.model === action.payload.model);

            state.orders.splice(index, 1);

            axios.put('http://localhost:5000/users/' + state.id, state)
        },

        updatePassword: (state, actionObj) => {

            let obj = {};
            Object.assign(obj, state);

            obj.password = actionObj.payload;
            state.password = actionObj.payload;
            axios.put('http://localhost:5000/users/' + state.id, state).
                then((response) => window.alert("Password changed Successfully")).
                catch((err) => window.alert("uncaught error"));
        }
    }
});

export const { addUser, removeUser, updateBag, removeProductBag, updateProductQuantity, updateOrders, deleteOrder, updatePassword } = userSlice.actions;
export default userSlice.reducer;