import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./user/slice.js"

// export const storeConfig = {
//     boards:[],
//     columns:[],
//     cards:[],
//     user: {
//         name: 'User',
//         email: 'user@gmail',
//         password:'244466666',
//         photo: '',
//         theme: 'Violet',
//     },
//     isLogin: false,
//     loader: false,
//     error: false,
// }


export const store = configureStore({reducer: {
    user: userReducer,
}})