import bannerimage from "@/app/assets/bannerimage.jpg"
import Image from "next/image"
import Link from "next/link"

export default function Homebanner(){
    return (
        <>
        <div className=" relative mt-20 flex w-full h-screen bg-[#F9E5BC]">
            <div>
            <Image className="xl:px-20  xl:items-center w-full h-screen object-cover"
             src={bannerimage}
             alt=" luxury badroom image"/>
             </div>
            <div className=" absolute  z-5 w-[55%] mt-24 bg-white h-[480px] px-4 md:px-12 py-8 flex flex-col justify-between overflow-hidden">
              <div>
                <h1 className="text-l md:text-2xl md:text-left text-[#22202E]">
                Luxury homeware for people who love timeless design quality
                </h1>
                <h1 className="py-6 'text-sm md:text-xs md:text-left' text-[#5B5676]">
                A Shop the new Spring 2022 collection today
                </h1>
               
              </div>
              <div className="my-10">
                <Link href={"/allcard"}><button  className="w-[170px] h-[56px] bg-[#F9F9F9] text-[#5B5676] border border-gray-600 font-bold mt-12">
                View collection
                </button></Link>
              </div>
            </div>



        </div>

        </>
    )
    
}