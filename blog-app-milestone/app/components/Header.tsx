import Link from "next/link"
import { ModeToggle } from "./ModeToggler"


const Header = () => {
  return (
    <header className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
        <div>
            <Link href='/' className="font-bold text-3xl">
            Abd<span className="text-primary">Blog</span>
            </Link>
        </div>
        <nav className="hidden lg:flex space-x-5 font-semibold text-[17px]">
            <Link href='/' className="hover:text-primary">
            Home
            </Link>
            <Link href='/' className="hover:text-primary">
            About
            </Link>
            <Link href='/' className="hover:text-primary">
            Contact
            </Link>
        </nav>
        <div>
            <ModeToggle />
        </div>
    </header>
  )
}

export default Header