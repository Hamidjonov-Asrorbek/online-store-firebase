import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name) => "/",
    }),
  }),
});

export const { useGetProductByNameQuery } = productsApi;
