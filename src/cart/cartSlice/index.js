import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) ?? [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.products = [...state.products, { id: action.payload, count: 1 }];
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    deleteToCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCart, deleteToCart } = cartSlice.actions;
export default cartSlice.reducer;
