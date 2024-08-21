import { baseApi } from "../Api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: '/products',
                method: "GET",
            }),
            providesTags: ["Products"],
        }),
        createProducts: builder.mutation({
            query: (data) => {
                return {
                    url: "products/create-products",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Products"],
        }),
    }),
});

export const {
     useGetAllProductsQuery, 
     useCreateProductsMutation 
    
    } = productsApi;