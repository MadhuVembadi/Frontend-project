import { createSlice } from '@reduxjs/toolkit'

export const status_slice = createSlice({
    name: "status",
    initialState: [false],
    reducers: {
        changeStatus: (state, action) => {
            state[0] = action.payload[0]
        }
    }
});

export const { changeStatus } = status_slice.actions;

export default status_slice.reducer;