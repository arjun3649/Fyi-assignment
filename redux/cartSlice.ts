import { Product } from "@/app/Utils/CardsList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  product: Product;
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      console.log(product);
      
      const existingItem = state.cartItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({
          product,
          qty: 1
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(item => item.product.id !== action.payload);
    },
    incrementQty: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(item => item.product.id  === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    decrementQty: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(item => item.product.id  === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
      
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty ,clearCart} = cartSlice.actions;
export default cartSlice.reducer;