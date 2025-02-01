'use client'

import Image from "next/image"
import search from "../assets/search.png"
import logo from "../assets/logo.png"
import cart from "../assets/cart.png"
import profile from "../assets/profile.png"
import Link from "next/link"
import humburger from "../assets/Hamburger.png"
import { useState } from "react";





export default function Header(){
    
   const [open,setOpen] = useState(false)

    
     const [searchQuery, setSearchQuery] = useState(""); // 🔍 Search query state
     const [showSearch, setShowSearch] = useState(false); // 🔄 Toggle search bar

 
  
    return (
        <>
        <div className="header">
            <div className="header-1">
                <ul>
                    <li>

{/* Search Icon & Bar */}
<div className="">
{/* Search Icon */}
<button
 onClick={() => setShowSearch(!showSearch)}

>
 <Image src={search} alt="search icon" className="w-5 h-5" />
</button>

{/* Search Input (Show/Hide on Click) */}
{showSearch && (
 <input
   type="text"
   placeholder="Search products..."
   value={searchQuery}
   onChange={(e) => setSearchQuery(e.target.value)}
   className="absolute ml-5 left-0 top-14 w-48 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none shadow-lg bg-white"
 />
)}
</div></li>
                </ul>
                <ul>
                <Link href="/"><li><h1><Image className="logo" src={logo} alt={"search"}/></h1></li></Link>
                </ul>
                <ul className="cart-profile">


                <Link href="/addtocard"><li><Image className="cart " src={cart} alt={"cart"}/>
           
                
                
                </li>
                </Link>


                    <Link href="/signup"><li><Image className="profile" src={profile} alt={"profile"}/></li></Link>
                    <label htmlFor="click">
                    <li><Image className="humburger" src={humburger} alt={"humburger"} 
                    onClick={()=>setOpen((prev)=>!prev)}/>
                    {
                        open && (
                            <div className="absolute bg-white 726E8D left-0 top-20 w-full h-[calc(100vh-90px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                                   <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                                   <Link href="/allcard" onClick={() => setOpen(false)}>Collection</Link>
                                   <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                                   <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>

                            </div>
                        )
                    }
                    
                    </li>





                    </label>
                </ul>
            </div>
            <header className="text-gray-600 body-font hidden md:block mx-auto">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-16 justify-center ">
              <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
              <Link href="/allcard" className="mr-5 hover:text-gray-900">Collection</Link>
              <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
              <Link href="/about" className="mr-5 hover:text-gray-900">About Us</Link>
            </nav>

          </div>
        </header>



        </div>

           
        

        </>
    )
}