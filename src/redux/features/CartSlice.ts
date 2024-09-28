import { AddToCartPayload } from './../../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCard } from "../../types/types";
import { RootState } from '../store';



const initialState: TCard = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const { product, quantity } = action.payload;
            const existingItem = state.items.find((item) => item._id === product._id);

            if (existingItem) {
                existingItem.selectedQuantity += quantity;
            }else{
                state.items.push({
                    ...product,
                    selectedQuantity: quantity,
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            state.items = state.items.filter((item) => item._id !== productId);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


export const cartProduct = (state: RootState) => state.cart.items;
export const selectTotalQuantity = (state: RootState) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state: RootState) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
