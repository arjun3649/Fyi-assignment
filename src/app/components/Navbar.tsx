import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store";

const Navbar: React.FC = () => {
 const [isScrolling, setIsScrolling] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useSelector((state: IRootState) => state.cart.cartItems);

  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
     <nav
      className={`sticky top-0 z-50 flex h-16 w-full items-center justify-between px-4 shadow-md shadow-blue-300 transition-all duration-300 md:w-2/3 ${
        isScrolling || isScrolled ? "bg-white bg-opacity-40" : "bg-white bg-opacity-60"
      }`}
      style={{
        backdropFilter: "blur(10px)", // Blur effect for glassmorphism
        border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border for the glass effect
        borderRadius: "10px", // Optional: rounded corners for a more polished look
      }}
    >
      <Link className="flex items-center" href="/">
        <p className="text-lg font-bold text-blue-900">Plus-Kart</p>
      </Link>

      <Link href="/cart" className="relative text-gray-600 hover:text-blue-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
