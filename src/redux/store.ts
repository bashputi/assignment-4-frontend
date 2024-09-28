import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './Api/baseApi';
import productsReducer from "./features/ProductSlice"
import cartReducer from "./features/CartSlice"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productsReducer,
    cart: cartReducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;