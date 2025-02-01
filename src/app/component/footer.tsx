
import Link from "next/link"



export default function Header(){
    return (
        <>
        <div className="footer">
            <div className="footer-button">
                <ul >
                    <Link href="/collection"><li><h1>Menu</h1></li></Link>
                    <Link href="/about"><li>New arrivals</li></Link>
                    <Link href="/payment"><li>Best sellers</li></Link>
                    <Link href={"/"} ><li>Recently viewed</li></Link>
                    <Link href="/collection"><li>Popular this week</li></Link>
                    <Link href="/about"><li>All products</li></Link>
                    
                </ul>
                <ul >
                    <Link href="/collection"><li><h1>Categories</h1></li></Link>
                    <Link href="/about"><li>Crockery</li></Link>
                    <Link href="/payment"><li>Furniture</li></Link>
                    <Link href={"/"} ><li>Homeware</li></Link>
                    <Link href="/collection"><li>Plant pots</li></Link>
                    <Link href="/about"><li>Chairs</li></Link>
                    <Link href="/payment"><li>Crockery</li></Link>
                </ul>
                <ul >
                    <Link href="/collection"><li><h1>Our company</h1></li></Link>
                    <Link href="/about"><li>About us</li></Link>
                    <Link href="/payment"><li>Vacancies</li></Link>
                    <Link href={"/"} ><li>Contact us</li></Link>
                    <Link href="/collection"><li>Privacy</li></Link>
                    <Link href="/about"><li>Returns policy</li></Link>
                    
                </ul>
            </div>

            <div className="footer-email">
                <ul>
                <Link href={"#"} ><li><h1>Join our mailing list</h1></li></Link>
                <li className="email-box"><input type="email" name="email" placeholder="Your@email.com" /><button type="button" name="button">Sign Up</button></li>
                </ul>
            </div>
        </div>

        </>
    )
}
