"use client";

import Navbar from "@/app/components/Navbar";
import { Product, products } from "@/app/Utils/CardsList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice";
import { AppDispatch } from "../../../../redux/store";

type CartItem = Product & {
  quantity: number;
};

const DetailPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const slug = params.slug as string;
  const [details, setDetails] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = products.find((product) => product.slug === slug);
    if (foundProduct) {
      setDetails(foundProduct);
    } else {
      // Handle product not found
    }
  }, [slug]);

  if (!details) {
    return <div className="py-20 text-center">Loading...</div>;
  }
  const handleAddItemsToCart = () => {
    if (details) {
      const cartItem: CartItem = {
        ...details,
        quantity: 1, // Add the quantity property
      };

      dispatch(addToCart(cartItem));
      toast.success("Item added to cart");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 px-4 py-12 sm:px-6 lg:px-8 mt-2 rounded-xl">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="md:flex">
            <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 md:w-1/2 md:flex-shrink-0">
              <img
                className="h-64 w-full object-cover md:h-full md:w-full"
                src={details.img}
                alt={details.title}
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                {details.brand}
              </div>
              <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {details.title}
              </h1>
              <p className="mt-4 text-gray-500">{details.description}</p>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Specifications
                </h3>
                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
                  {Object.entries(details.specs).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-200 pb-2">
                      <dt className="font-medium capitalize text-gray-500">
                        {key}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{details.price}
                </span>
                <button
                  onClick={handleAddItemsToCart}
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
