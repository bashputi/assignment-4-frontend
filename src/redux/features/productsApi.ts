import { baseApi } from "../Api/baseApi";

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ page, limit }) => ({
                url: `api/product?page=${page}&limit=${limit}`,
                method: "GET",
            }),
            // providesTags: ["Products"],
        }),
        createProducts: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/create-products",
                    method: "POST",
                    body: data,
                };
            },
            // invalidatesTags: ["Products"],
        }),
    }),
});

export const {
 useCreateProductsMutation,
 useGetAllProductsQuery
    
    } = productsApi;


