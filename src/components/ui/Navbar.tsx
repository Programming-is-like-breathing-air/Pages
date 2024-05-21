
import Link from "next/link"
import { Button } from "../ui/button";


const Navbar = () => {
  return <div className=" bg-zinc-100 py-4 border-b border-s-zinc-200 fixed w-full z-10 top-0">
    <div className="container flex items-center justify-between">

      <Link href='/aboutus'> About Us</Link>
      <Link href='/business'> Business</Link>
      <Link href='/countdown'> Count Down</Link>
      <Link href='/error'> Error</Link>
      <Link href='/layout'> Layout</Link>
      <Link href='/playground'>Playground</Link>
      <Link href='/portfolio'> Portfolio</Link>
      <Link href='/serverdown'> Server Down</Link>

    </div>
  </div >


}

export default Navbar
