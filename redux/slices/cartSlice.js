import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQnt:0,
    totalPrice:0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const item = action.payload
            const existingItem = state.cartItems.find((cartItems) => cartItems.id === item.id)
            if (existingItem) {
                state.cartItems = state.cartItems.map((i) =>
                    i.id === existingItem.id ? { ...item, quantity: existingItem.quantity + 1}:i                    
                )
            }           
            else {
                state.cartItems.push({ ...item, quantity: 1})
                console.log(state.cartItems[0] , 'cart items')
            }
            state.totalQnt = state.cartItems.reduce((count , item)=>count + item.quantity, 0)
            state.totalPrice = state.cartItems.reduce((count , item)=>count + item.quantity * item.price, 0)
        },
        removeCartItem: (state, action) => {
            const id = action.payload
            state.cartItems = state.cartItems.filter((i) => id !== i.id)
              state.totalQnt = state.cartItems.reduce((count , item)=>count + item.quantity, 0)
                state.totalPrice = state.cartItems.reduce((count , item)=>count + item.quantity * item.price, 0)
        },
        updateCartQuantity: (state, action) => {
            const { amount ,item} = action.payload;
            state.cartItems = state.cartItems.map((i) =>
                i.id ===item.id ? { ...item, quantity: item.quantity + amount}:i   
            ).filter((item)=>item.quantity >0)
              state.totalQnt = state.cartItems.reduce((count , item)=>count + item.quantity, 0)
                state.totalPrice = state.cartItems.reduce((count , item)=>count + item.quantity * item.price, 0)
        },
        getCartCount:(state) =>{
            state.totalQnt = state.cartItems.reduce((count , item)=>count + item.quantity, 0)
        },
        getCartPrice:(state) =>{
            state.totalPrice = state.cartItems.reduce((count , item)=>count + item.quantity * item.price, 0)
        }
    }
})
export const { addCartItem, removeCartItem, updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;