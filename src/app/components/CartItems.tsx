"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../../redux/cartSlice";
import { Product } from "../Utils/CardsList";

interface Props {
  product: Product;
  qty: number;
}

const CartItems: React.FC<Props> = ({ product, qty }) => {
  const dispatch = useDispatch();

  // Dispatch action to increment the quantity of the product in the cart
  const handleIncrement = () => {
    dispatch(incrementQty(product.id));
  };

  // Dispatch action to decrement the quantity of the product in the cart
  const handleDecrement = () => {
    dispatch(decrementQty(product.id));
  };

  // Dispatch action to remove the product from the cart
  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  // Show loading state if product data is not available
  if (!product || !product.img || !product.title) {
    return <div>Loading product details...</div>;
  }

  return (
    // Animated container using Framer Motion for smooth fade-in/fade-out effect
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start with lower opacity and translate down
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
      exit={{ opacity: 0, y: -20 }} // Exit animation when the item is removed
      className="w-full"
    >
      <div className="flex w-full flex-col rounded-xl bg-white p-3 shadow-md shadow-blue-400 sm:flex-row sm:rounded-lg dark:bg-gray-800">
        {/* Product Image and Details */}
        <div className="flex w-full items-start space-x-4">
          {/* Link to product detail page */}
          <Link href={`/detail/${product.slug}`}>
            <img
              className="h-20 w-20 object-cover sm:h-24 sm:w-24"
              src={product.img}
              alt={product.title}
            />
          </Link>
          <div className="flex w-full flex-col">
            {/* Product title */}
            <h4 className="text-base font-semibold text-gray-800 sm:text-lg dark:text-white">
              {product.title}
            </h4>
            {/* Product brand */}
            <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              {product.brand}
            </p>
            {/* Product description */}
            <p className="mt-1 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </div>

        {/* Quantity Control, Price, and Remove Button */}
        <div className="mt-4 flex w-full items-center justify-between space-x-3 sm:ml-auto sm:mt-0 sm:w-auto">
          {/* Controls for adjusting quantity */}
          <div className="flex items-center space-x-2">
            {/* Decrement quantity button */}
            <button
              onClick={handleDecrement}
              className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 sm:text-base dark:bg-gray-700 dark:text-white"
            >
              -
            </button>
            {/* Display current quantity */}
            <span className="text-gray-800 sm:text-base dark:text-white">
              {qty}
            </span>
            {/* Increment quantity button */}
            <button
              onClick={handleIncrement}
              className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 sm:text-base dark:bg-gray-700 dark:text-white"
            >
              +
            </button>
            {/* Display product price */}
            <span className="text-base font-semibold text-gray-800 sm:text-lg dark:text-white">
              ₹{product.price}
            </span>
          </div>

          {/* Remove button with an icon to delete the product from the cart */}
          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700"
            aria-label="Remove item"
          >
            {/* SVG icon for the remove button */}
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItems;
