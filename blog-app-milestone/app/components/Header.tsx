"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5 z-50">
      <div>
        <Link href="/" className="font-bold text-3xl">
          Abd<span className="text-primary">Blog</span>
        </Link>
      </div>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex absolute lg:static top-0 left-0 w-full lg:w-auto lg:bg-transparent bg-white lg:flex-row flex-col lg:space-x-5 space-y-4 lg:space-y-0 font-semibold text-[17px] lg:py-0 py-5 px-4 lg:px-0 shadow-md lg:shadow-none z-40`}
      >
        <Link href="/" className="text-primary lg:no-underline lg:text-black lg:hover:text-primary">
          Home
        </Link>
        <Link href="/" className="text-primary lg:no-underline lg:text-black lg:hover:text-primary">
          About
        </Link>
        <Link href="/" className="text-primary lg:no-underline lg:text-black lg:hover:text-primary">
          Contact
        </Link>
        
        <div className="lg:hidden mt-4 absolute bottom-4 right-2">
          <ModeToggle />
        </div>
      </nav>
      <div className="flex items-center lg:hidden z-50">
        {isMenuOpen ? (
          <button onClick={() => setIsMenuOpen(false)}>
            <IoClose size={24} />
          </button>
        ) : (
          <button onClick={() => setIsMenuOpen(true)}>
            <IoMenu size={24} />
          </button>
        )}
      </div>
      <div className="hidden lg:block">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
