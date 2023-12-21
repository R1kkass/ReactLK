import { createSlice } from "@reduxjs/toolkit";

interface IInit {
    token: string
}

const initialState: IInit = {
    token: ""
};

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        addToken(state, actions) {
            state.token=actions.payload;
        },
    },
});

export default tokenSlice.reducer;

export const { addToken } = tokenSlice.actions;