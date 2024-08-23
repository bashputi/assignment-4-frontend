import { RootState } from '../store';
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

const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setMinPrice(state, action: PayloadAction<number>) {
            state.minPrice = action.payload;
        },
        setMaxPrice(state, action: PayloadAction<number>) {
            state.maxPrice = action.payload;
        },
        setSort(state, action: PayloadAction< "low-to-high" | "high-to-low">) {
            state.sort = action.payload;
        },
        clearFilters(state) {
            state.minPrice = 0;
            state.maxPrice = Infinity;
            state.sort = null;

        },
        getSingleProduct: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            const singleProduct = state.products.find((p) => p._id === productId);
            state.singleProduct = singleProduct;
        },
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        deleteProduct: (state, action) => {
            const productId = action.payload;
            state.products = state.products.filter((p) => p._id !== productId);
        },
        setUpdateProducts: (state, action) => {
            state.products = action.payload;
        },
        updateProductIntoState: (state, action) => {
            const getProduct = action.payload;
            const foundProduct = state.products.find((p) => p._id === getProduct?._id);

            if (foundProduct) {
                Object.assign(foundProduct, getProduct);
            }
        },
    },
});

export const {
    setProducts,
    deleteProduct,
    setSearchQuery,
    increment,
    decrement,
    getSingleProduct,
    updateProductIntoState,
    setMaxPrice,
    setMinPrice,
    setSort,
    clearFilters,

} = productsSlice.actions;

export const selectCount = (state: RootState) => state.products.value;
export const selectProducts = (state: RootState) => state.products;
export const selectSearchQuery = (state: RootState) => state.products.searchQuery;
export const singleProductFormState = (state: RootState) => state.products.singleProduct;
export const selectfilters = (state: RootState) => state.products;


export default productsSlice.reducer;