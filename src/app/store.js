import { configureStore } from "@reduxjs/toolkit";
import idReducer from './idSlice';
export default configureStore({
    reducer: {
        id: idReducer,
    }
})