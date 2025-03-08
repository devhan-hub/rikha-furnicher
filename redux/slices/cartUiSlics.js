import { createSlice } from "@reduxjs/toolkit";

 const initialState ={
     open:false,
 }

 const cartUiSlice = createSlice({
    name:'cartUi',
    initialState,
    reducers:{
        openCart:(state)=> {state.open = true;},
        closeCart:(state)=> {state.open = false;},
    }
 })
export const  {openCart , closeCart } = cartUiSlice.actions;
 export default cartUiSlice.reducer;