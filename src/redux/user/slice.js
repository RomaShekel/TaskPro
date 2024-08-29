import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./operations.js";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: 'User',
            email: 'user@gmail',
            password:'244466666',
            photo: '',
            theme: 'Violet',
        },
        isLogin: false,
        loader: false,
        error: false,
    },
    reducers: {
        changeUser(state, action) {
           state.user = action.payload;
        },
    },

    extraReducers: builder => {
        builder
        .addCase(loginUser.pending, (state, action) => {
            state.loader = true;
            state.error = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loader = false;
            state.isLogin = true;
            state.user = {
                name: action.payload.data.user.name,
                email: action.payload.data.user.email,
                photo: action.payload.data.user.photo,
            }
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loader = false;
            state.error = true;
        })
        .addCase(registerUser.pending, (state, action) => {
            state.loader = true;
            state.error = false;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loader = false;
            state.isLogin = true;
            state.user = {
                name: action.payload.data.name,
                email: action.payload.data.email,
                photo: action.payload.data.photo,
            }
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loader = false;
            state.error = true;
        })
    }
})

export const { changeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;