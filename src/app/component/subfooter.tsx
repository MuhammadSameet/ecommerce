
import Image from "next/image"
import insta from "../assets/insta.png"
import facebook from "../assets/Icon-Facebook.png"
import twitter from "../assets/twitter.png"
import skype from "../assets/sky.png"
import pintrest from "../assets/pintrest.png"
import linkin from "../assets/link.png"



export default function Header(){
    return (
        <>
        <div className="subfooter">
            <ul className="ul-1">
               <li>Copyright 2022 Sameet Shahid</li>
            </ul>
            <ul className="ul-2">
                 <li><Image src={linkin} alt={"search icon"}/></li>
                 <li><Image src={facebook} alt={"search icon"}/></li>
                 <li><Image src={insta} alt={"search icon"}/></li>
                 <li><Image src={skype} alt={"search icon"}/></li>
                 <li><Image src={twitter} alt={"search icon"}/></li>
                 <li><Image src={pintrest} alt={"search icon"}/></li>
            </ul>
        </div>
        </>
    )
}
