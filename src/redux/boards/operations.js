import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const api = axios.create({
    baseURL: 'https://waterin-server-3.onrender.com',
    withCredentials: true
})

export const setAuthHeader = token => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
  