import { configureStore } from "@reduxjs/toolkit";
import cartUI from  './slices/cartUiSlics'
import cartReducer from './slices/cartSlice'
export const store = configureStore({
    reducer:{
        cartui:cartUI,
        cart:cartReducer
    }
})