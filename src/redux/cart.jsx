import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: 'cart', // must be unique
  initialState, // corrected typo here
  reducers: {
    addToCart: (state) => {
      state.cartCount = 1;
    },
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
      state.cartCount -= 1;
    },
  },
});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
