'use client'
import Image from "next/image";
import  { useEffect, useState } from "react";
import { Products } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import {  fourCard } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Card =() => {
  const [product, setProduct] = useState<Products[]>([])

  useEffect(() => {
    async function fetchproduct(){
      const fetchedProduct : Products[] = await client.fetch(fourCard)
      setProduct(fetchedProduct)
    }
    fetchproduct()

  }, [])





   

   return (
    <>
    <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-6">

       <h1 className="text-2xl font-semibold">New Ceramics</h1>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
       
      {product.map((product) => (
        
        <div className="w-full h-auto"
         key={product._id} >

          {/* {product.name} */}
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
      ))}
    </div>
            {/* View Collection Button */}
           <div className="mt-16 flex justify-center items-center">
            <Link href={"/allcard"}><button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
              View collection
             </button></Link>
           </div>
    </div>

    </>
   )

}
export default Card;


