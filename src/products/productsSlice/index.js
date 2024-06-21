import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  filterData: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
      state.filterData = action.payload;
    },
    filterData: (state, action) => {
      switch (action.payload) {
        case "rating":
          state.filterData = state?.filterData?.sort(
            (a, b) => b.rating - a.rating
          );
          break;
        case "price":
          state.filterData = state?.filterData?.sort(
            (a, b) => a.price - b.price
          );
          break;
        case "name":
          state.filterData = state?.filterData?.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
          break;
        case "!name":
          state.filterData = state?.filterData?.sort(function (a, b) {
            if (a.title > b.title) {
              return -1;
            }
            if (a.title < b.title) {
              return 1;
            }
            return 0;
          });
          break;
      }
    },
    searchData: (state, action) => {
      state.filterData =
        state?.data?.filter(({ title }) =>
          title.toLowerCase().includes(action.payload.toLowerCase())
        ) || [];
    },
  },
});
export const { getData, filterData, searchData } = productsSlice.actions;
export default productsSlice.reducer;
