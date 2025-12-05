import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "add to cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const exist = state.cart.find(prod=> prod.id === action.payload.id)
            exist ? alert("this product is already added") : state.cart = state.cart = [...state.cart, action.payload]
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                prod => prod.id !== action.payload
            )
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer