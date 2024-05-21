import Link from "next/link"
import { Button } from "../ui/button";


const Navbar = () => {
    return <div className="container flex flex-col items-center" >

        <div className="flex items-center justify-between w-full border-b border-gray-300 pb-2 mb-4">

            <div className="flex space-x-4 ml-auto">
                <Link href='/aboutus'> About Us</Link>
                <Link href='/business'> Business</Link>
                <Link href='/countdown'> Count Down</Link>
                <Link href='/error'> Error</Link>
                <Link href='/layout'> Layout</Link>
                <Link href='/playground'>Playground</Link>
                <Link href='/portfolio'> Portfolio</Link>
                <Link href='/severdown'> Server Down</Link>

            </div>
        </div >

    </div>

}

export default Navbar
