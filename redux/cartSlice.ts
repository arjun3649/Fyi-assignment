import { Product } from "@/app/Utils/CardsList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of each item in the cart
interface CartItem {
  product: Product;
  qty: number;  // Quantity of the product
}

// Define the structure of the cart state
interface CartState {
  cartItems: CartItem[];  // Array of cart items
}

// Initial state of the cart
const initialState: CartState = {
  cartItems: [],  // Starts with an empty cart
};

// Create a Redux slice for cart functionality
const cartSlice = createSlice({
  name: "cart",  // Name of the slice
  initialState,  // Initial state of the cart
  reducers: {
    // Reducer to add a product to the cart
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;  // Product being added to the cart
      console.log(product);  // Debug: Log the product to the console
      
      // Check if the product already exists in the cart
      const existingItem = state.cartItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // If the product already exists, increase its quantity
        existingItem.qty += 1;
      } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        state.cartItems.push({
          product,
          qty: 1,
        });
      }
    },
    // Reducer to remove a product from the cart by its ID
    removeFromCart: (state, action: PayloadAction<number>) => {
      // Filter out the product to remove it from the cart
      state.cartItems = state.cartItems.filter(item => item.product.id !== action.payload);
    },
    // Reducer to increment the quantity of a product in the cart
    incrementQty: (state, action: PayloadAction<number>) => {
      // Find the product by its ID
      const item = state.cartItems.find(item => item.product.id === action.payload);
      if (item) {
        // If found, increase its quantity by 1
        item.qty += 1;
      }
    },
    // Reducer to decrement the quantity of a product in the cart
    decrementQty: (state, action: PayloadAction<number>) => {
      // Find the product by its ID
      const item = state.cartItems.find(item => item.product.id === action.payload);
      if (item && item.qty > 1) {
        // If found and the quantity is greater than 1, decrease it by 1
        item.qty -= 1;
      }
      // Note: No action taken if the quantity is 1 (to prevent removing the item)
    },
    // Reducer to clear all items from the cart
    clearCart: (state) => {
      state.cartItems = [];  // Reset cartItems to an empty array
    },
  },
});

// Export the reducer actions for use in components
export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;

// Export the reducer as the default export
export default cartSlice.reducer;
