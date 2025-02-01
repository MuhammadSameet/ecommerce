
import Image from "next/image"
import React from 'react'
import about1img from "../assets/about1img.png"
import about2img from "../assets/about2img.png"
import Bannercard from "./bannercard"
import Emailbox from "./emailbox"
import Link from "next/link"
import AboutBanner from "./aboutbanner"

     export default function Aboutme(){
      return (
        <>
        <AboutBanner/>
        <section>
        <div className="py-12 text-[#2A254B] mt-12">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-2xl">
                  From a studio in London to a global brand with over 400 outlets
                </h1>
                <h1 className="py-6 text-lg md:text-xl">
                  When we started Avion, the idea was simple. Make high-quality furniture <br />
                  affordable and available for the mass market.
                </h1>
                <h1 className="text-base md:text-lg">
                  Handmade and lovingly crafted furniture and homeware is what we live, <br />
                  breathe, and design, so our Chelsea boutique became the hotbed for the <br />
                  London interior design community.
                </h1>
              </div>
              <div className="my-10">
                <Link href={"/signup"}>
                <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]">
                  Get in touch
                </button>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[890px] h-auto">
              <Image
                src={about1img}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-12 text-[#2A254B] mt-12">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-2xl">
                 Our service isn’t just personal, it’s actually
                 hyper personally exquisite
                </h1>
                <h1 className="py-6 text-lg md:text-xl">
                  When we started Avion, the idea was simple. Make high-quality furniture <br />
                  affordable and available for the mass market.
                </h1>
                <h1 className="text-base md:text-lg">
                  Handmade and lovingly crafted furniture and homeware is what we live, <br />
                  breathe, and design, so our Chelsea boutique became the hotbed for the <br />
                  London interior design community.
                </h1>
              </div>
              <div className="my-10">
              <Link href={"/signup"}>
                <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]">
                  Get in touch
                </button>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[890px] h-auto">
              <Image
                src={about2img}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>
      <Bannercard/>
      <Emailbox/>
    </>
      
      )
     }