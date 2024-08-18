"use client";

import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { AppDispatch } from "../../../redux/store";
import { Product } from "../Utils/CardsList";

interface Props {
  product: Product;
}

const Cards: React.FC<Props> = ({ product }) => {
  // Initialize Redux dispatch with the correct type for AppDispatch
  const dispatch = useDispatch<AppDispatch>();

  // Handle click event for adding an item to the cart
  function handleAddItemsToCart(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault(); // Prevent the default behavior of the button
    dispatch(addToCart(product)); // Dispatch action to add the product to the cart
    toast.success("Item added to cart"); // Show success notification using react-hot-toast
  }

  // Check if the product data is available, otherwise show a loading state
  if (!product || !product.img || !product.title) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md shadow-blue-400 transition-transform duration-300 md:hover:scale-105">
      {/* Link to the product detail page */}
      <Link
        href={`/detail/${product.slug}`}
        prefetch // Prefetch the data for faster navigation
        className="h-48 overflow-hidden"
      >
        {/* Product image with object-cover to ensure it fits within the div */}
        <img
          className="h-full w-full object-cover"
          src={product.img}
          alt={product.title}
        />
      </Link>

      {/* Content container for the product details */}
      <div className="flex flex-grow flex-col p-4">
        {/* Product title */}
        <h3 className="mb-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h3>

        {/* Product description */}
        <p className="mb-2 flex-grow text-sm text-gray-600">
          {product.description}
        </p>

        {/* Price and brand container */}
        <div className="mt-auto flex items-center justify-between">
          {/* Product price */}
          <span className="text-lg font-bold text-blue-600">
            ₹{product.price}
          </span>

          {/* Product brand */}
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>

        {/* Button to add the product to the cart */}
        <button
          onClick={handleAddItemsToCart}
          className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
