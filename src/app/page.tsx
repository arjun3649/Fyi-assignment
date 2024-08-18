"use client";
import Banner from "./components/Banner";

import Navbar from "./components/Navbar";
import Products from "./components/Products";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Banner />
      <Products />
    </div>
  );
}
export default Home;
