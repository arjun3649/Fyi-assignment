"use client";

import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store";
import CartItems from "../components/CartItems";
import CartTotal from "../components/CartTotal";
import Navbar from "../components/Navbar";

const Cart = () => {
  const cartItems = useSelector((state: IRootState) => state.cart.cartItems);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8">
          <div className="w-full lg:w-2/3">
            {cartItems.length === 0 ? (
              <div className="rounded-lg bg-white p-8 text-center shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Your Cart is Empty
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  It looks like you havent added any items to your cart yet.
                  Start shopping now!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItems
                    key={item.product.id}
                    product={item.product}
                    qty={item.qty}
                  />
                ))}
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="mt-8 w-full lg:sticky lg:top-4 lg:mt-0 lg:w-1/3 lg:self-start">
              <CartTotal />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
