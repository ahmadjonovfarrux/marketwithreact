import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmoun: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
        state.cart.push(payload)
    },
    increment: () => {},
    decrement: () => {},
    clearCart: () => {},
    deleteCart: () => {},
  },
});

export const {addToCart, increment, decrement, deleteCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
