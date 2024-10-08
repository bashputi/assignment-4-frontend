import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
 tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-4-backend-six.vercel.app/' }),
  endpoints: () => ({}),
})
