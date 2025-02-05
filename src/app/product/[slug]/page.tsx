"use client";

import { groq } from "next-sanity";
import { Products } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

interface ProductPageProps {
  params: { slug: string };
}

// Fetch function ko server-side component me le jao
async function getProduct(slug: string): Promise<Products> {
  return client.fetch(
    groq`
      *[_type == "product" && slug.current == $slug][0] {
      name,
      _id,
      _type,
      image,
      price,
      description
      }`, 
    { slug }
  );
}

export default function Product({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Products | null>(null);
  const { slug } = params;

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(slug);
      setProduct(data);
    }
    fetchProduct();
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} Added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(product);
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 h-auto">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-semibold">{product.name}</p>
          <p className="py-2 text-lg md:text-xl">${product.price}</p>

          <div className="text-[#505977] text-sm md:text-base">
            <h1 className="font-semibold">Description</h1>
            <p className="my-4 md:my-6">{product.description}</p>

            <div className="ml-4">
              <ul className="list-disc space-y-1">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>

            <div className="my-8">
              <h1 className="font-semibold">Dimensions</h1>
              <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                <div>
                  <h1>Height</h1>
                  <p>110cm</p>
                </div>
                <div>
                  <h1>Width</h1>
                  <p>75cm</p>
                </div>
                <div>
                  <h1>Depth</h1>
                  <p>50cm</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center mt-8">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity">Amount:</label>
                <input
                  type="number"
                  id="quantity"
                  className="border w-28 border-gray-300 p-2 rounded"
                  defaultValue="1"
                  min="1"
                  max="10"
                />
              </div>
              <button
                className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
