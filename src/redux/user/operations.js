import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: 'https://waterin-server-3.onrender.com',
    withCredentials: true
})

export const setAuthHeader = token => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
  
const clearAuthHeader = () => {
    api.defaults.headers.common['Authorization'] = '';
};

export const loginUser = createAsyncThunk("user/login", async (userData, ThunkAPI) => {
    try {
        console.log(userData)
        const response = await api.post("/users/login", { email: userData.email, password:userData.password })
        setAuthHeader(response.data.data.token)
        console.log(response.data.data)
        return response.data;
    } catch (e) {
        return ThunkAPI.rejectWithValue(e.massage)
    }
});

export const registerUser = createAsyncThunk('user/register', async (userData, ThunkAPI) => {
    try {
        const response = await api.post("/users/register", { ...userData }) 
        setAuthHeader(response.data.data.token);
        // console.log(respon)
        return response.data.data.user;
    } catch (e) {
        ThunkAPI.rejectWithValue(e.massage)
    }
})
