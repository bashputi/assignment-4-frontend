import { RootState } from "@/Redux/store";
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductsState } from "../../types/types";


const initialState: ProductsState = {
    products: [],
    searchQuery: "",
    value: 0,
    selectedProduct: null,
    card: 0,
    cardProduct: [],
    cardIncrement: [],
    singleProduct: undefined,
    minPrice: 0,
    maxPrice: Infinity,
    sort: undefined,
};




export const {
    
} = productsSlice.actions;

export default productsSlice.reducer;