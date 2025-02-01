'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import searchIcon from "@/app/assets/search.png"; 
import allproduct from "@/app/assets/all product.png"; 
import down from "@/app/assets/down.png"; 
import { Products } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import {  allProducts} from "@/sanity/lib/queries";

const AllCard = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [showSearch, setShowSearch] = useState(false); 

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Products[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  // 🔍 Filtered Products Based on Search Query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-[20px]">
      {/* All Products Banner */}
      <Image className="all-product" src={allproduct} alt={"all product banner"} />

      {/* Search & Filter Section */}
      <div className="w-full h-auto bg-pink flex flex-col px-4 py-3 sm:flex-row sm:h-[10vh] sm:justify-between sm:items-center">
        {/* Filters */}
        <ul className="flex flex-wrap w-full sm:w-2/5 justify-around items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <li className="flex items-center space-x-1">
            <span>Category</span>
            <Image src={down} alt="down arrow" className="w-4" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Product type</span>
            <Image src={down} alt="down arrow" className="w-4" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Price</span>
            <Image src={down} alt="down arrow" className="w-4" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Brand</span>
            <Image src={down} alt="down arrow" className="w-4" />
          </li>
        </ul>

        {/* Search Icon & Bar */}
        <div className="w-full mt-3 sm:mt-0 sm:w-1/5 flex justify-center sm:justify-end relative">
          {/* Search Icon */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 border border-black rounded-lg flex items-center space-x-2"
          >
            <Image src={searchIcon} alt="search icon" className="w-5 h-5" />
          </button>

          {/* Search Input (Show/Hide on Click) */}
          {showSearch && (
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="absolute right-0 mt-12 w-48 px-2 py-2 border border-gray-400 rounded-lg focus:outline-none shadow-lg bg-white"
            />
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-6">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="w-full h-auto" key={product._id}>
                <Link href={`/product/${product.slug.current}`}>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={800}
                      height={800}
                      className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                    />
                  )}
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2">{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>

        {/* View Collection Button */}
        <div className="mt-16 flex justify-center items-center">
          <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
            View collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCard;



