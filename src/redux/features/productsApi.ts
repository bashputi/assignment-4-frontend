import { baseApi } from "../Api/baseApi";

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: "api/product",
                method: "GET",
            }),
            providesTags: ["Products"],
        }),
        createProducts: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/create-products",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Products"],
        }),
    }),
});

export const {
 useCreateProductsMutation,
 useGetAllProductsQuery
    
    } = productsApi;


