'use client'

import { groq } from "next-sanity";
import { Products } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";


interface ProductPageProps {
    params : Promise<{slug:string}>
}

async function getProduct(slug:string): Promise<Products > {
    return client.fetch(
        groq `
        *[_type == "product" && slug.current == $slug][0] {
        name,
         _id,
         _type,
         image,
         price,
        }`, {slug}
    )
}


    export default async function Product({params}:ProductPageProps){
    const {slug} = await params;
    const product = await getProduct(slug)



    const handleAddtoCard = (e: React.MouseEvent, product :Products) => {
      e.preventDefault()
      Swal.fire({
      position: "top-right",
      icon :"success",
      title : `${product.name} Added to cart`,
      showConfirmButton :false,
      timer: 1000
      })

      addToCart(product)
      
    }
    

  


    return (
 <>

        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">

            <div className="w-full md:w-1/2 h-auto">
            { product.image && (
         <Image 
         src={urlFor(product.image).url()}
          alt={product.name}
          width={800}
          height={800}
           className="w-full h-full object-cover" />
        )}
            </div>
            
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">{product.name}</p>
                <p className="py-2 text-lg md:text-xl">{product.price}</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                   {product.description}
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
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
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                    <label htmlFor="quantity">Amount:</label>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        {/* <span>+</span> 1 <span>-</span> */}
                        <input type="number" id="quantity" className="border w-28 border-gray-300 p-2 rounded" defaultValue="1"
                        
                         min="1"
                         max="10"
                         onChange={(e) =>
                           e.target.value
                             ? parseInt(e.target.value, 10)
                             : undefined
                         }
                        
                        />
                      </button>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0"
                    onClick={(e) => handleAddtoCard(e, product)}
                     >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

         

        </div>

        

      
  
        
        
</>
 )
};
