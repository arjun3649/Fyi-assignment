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
  const dispatch = useDispatch<AppDispatch>();

  function handleAddItemsToCart(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Item added to cart");
  }

  if (!product || !product.img || !product.title) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md shadow-blue-400 transition-transform duration-300 hover:scale-105">
      <Link
        href={`/detail/${product.slug}`}
        prefetch
        className="h-48 overflow-hidden"
      >
        <img
          className="h-full w-full object-cover"
          src={product.img}
          alt={product.title}
        />
      </Link>
      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h3>
        <p className="mb-2 flex-grow text-sm text-gray-600">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ₹{product.price}
          </span>
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>
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
