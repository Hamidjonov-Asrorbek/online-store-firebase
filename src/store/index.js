import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../products/productsSlice";
import { productsApi } from "../products/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartSlice from "../cart/cartSlice";
export const store = configureStore({
  reducer: {
    products: productsSlice,
    productsApi: productsApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
setupListeners(store.dispatch);
