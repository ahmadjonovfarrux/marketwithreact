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
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    increment: (state, { payload }) => {
      const item = state.cart.find((i) => i.id == payload);
      item.amount += 1;
    },
    decrement: (state, { payload }) => {
      const item = state.cart.find((i) => i.id == payload);
      item.amount -= 1;
    },
    clearCart: () => {},
    deleteCart: () => {},
  },
});

export const { addToCart, increment, decrement, deleteCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
