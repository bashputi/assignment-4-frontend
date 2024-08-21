import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: ["Products"],
    baseQuery: baseQuery,
    endpoints: () => ({}),
});