"use client";

import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store"; 
import { useRouter } from "next/navigation";

const CartTotal: React.FC = () => {
     const router = useRouter();
  const cartItems = useSelector((state: IRootState) => state.cart.cartItems);

  // Calculate subtotal price and item count
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0,
  );
  const itemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // Estimated shipping fee and percentage discount
  const shippingFee = 50; // Example fixed shipping fee
  const discountPercentage = 20; // Example discount percentage

  // Calculate discount amount
  const discountAmount = (subtotal * discountPercentage) / 100;

  // Total amount including shipping and applying discount
  const finalTotal = subtotal + shippingFee - discountAmount;

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-gray-100 p-4 shadow-md dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Order Summary
      </h2>

      {/* Product Breakdown */}
      <div className="mb-4 space-y-2">
        {cartItems.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between text-gray-700 dark:text-gray-400"
          >
            <span>
              {item.product.title} x {item.qty}
            </span>
            <span>₹{(item.product.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="mb-2 flex justify-between text-gray-700 dark:text-gray-400">
        <span>Subtotal ({itemCount} items)</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>

      {/* Shipping Fee */}
      <div className="mb-2 flex justify-between text-gray-700 dark:text-gray-400">
        <span>Shipping Fee</span>
        <span>₹{shippingFee.toFixed(2)}</span>
      </div>

      {/* Discount */}
      <div className="mb-2 flex justify-between text-gray-700 dark:text-gray-400">
        <span>Discount ({discountPercentage}%)</span>
        <span>-₹{discountAmount.toFixed(2)}</span>
      </div>

      <hr className="my-2 border-gray-300 dark:border-gray-700" />

      {/* Final Total */}
      <div className="mb-4 flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
        <span>Total</span>
        <span>₹{finalTotal.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <button onClick={()=>{router.push("/checkout");}} className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
