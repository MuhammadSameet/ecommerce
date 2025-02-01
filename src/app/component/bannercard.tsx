
import Image from "next/image"
import van from "../assets/van.png"
import tik  from "../assets/tik.png"
import purchase from "../assets/Purchase.png"
import flower from "../assets/flower.png"


export default function Bannercard(){
    return (
          <>
          <div className="bannercard">
            <h1>What makes our brand different</h1>
            
            <div className="bannercard-card">
                <ul>
                <li><Image src={van} alt={"banner"}/></li>
                <li><h2>Next day as standard</h2></li>
                <li><p>Order before 3pm and get your order the next day as standard</p></li>
                </ul>
                <ul>
                <li><Image src={tik} alt={"verify icon"}/></li>
                <li><h2>Made by true artisans</h2></li>
                <li><p>Handmade crafted goods made with real passion and craftmanship</p></li>
                </ul>
                <ul>
                <li><Image src={purchase} alt={"purchase icon"}/></li>
                <li><h2>Unbeatable prices</h2></li>
                <li><p>For our materials and quality you won’t find better prices anywhere</p></li>
                </ul>
                <ul>
                <li><Image src={flower} alt={"flower icon"}/></li>
                <li><h2>Recycled packaging</h2></li>
                <li><p>We use 100% recycled to ensure our footprint is more manageable</p></li>
                </ul>
            </div>
            


          </div>
          </>
    )
}