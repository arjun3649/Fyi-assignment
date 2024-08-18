"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { clearCart } from "../../../redux/cartSlice";
import { motion } from "framer-motion";

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    dispatch(clearCart());
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl font-extrabold text-green-500"
        >
          Order Placed Successfully
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">
          Thank you for your purchase! You will be redirected shortly.
        </p>
      </motion.div>
    </div>
  );
};

export default Checkout;
