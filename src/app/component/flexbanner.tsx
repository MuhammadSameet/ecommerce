import Image from 'next/image'
import React from 'react'
import about1img from "../assets/about1img.png"
import Link from 'next/link'


export default function Flexbanner(){

return (
    <>
<section>
        <div className="py-12 text-[#2A254B] mt-12">
          <div className="flex flex-col justify-center gap-2 md:flex-row">
            <div className="w-full md:w-[690px] bg-[#2A254B] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-3xl md:text-left text-white">
                The furniture brand for the future with
                the timeless designs
                </h1>
                <h1 className="py-6 'text-sm md:text-base md:text-left' text-white">
                A new era in eco-friendly furniture with Avion, the French luxury retail brand
                with sleek fonts, full colors, and a beautiful way to display things digitally
                using modern web technologies.
                </h1>
               
              </div>
              <div className="my-10">
                <Link href={"/allcard"}><button className="w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12">
                View collection
                </button></Link>
              </div>
            </div>

            <div className="w-full md:w-[690px] h-auto">
              <Image
                src={about1img}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

         </>
)}

