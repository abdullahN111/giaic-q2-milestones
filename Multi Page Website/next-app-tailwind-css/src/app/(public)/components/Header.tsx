"use client";

import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex justify-between items-center h-[88px] bg-black text-white px-12">
  
      <div className="text-lg font-bold">
        <Link href="/" className="no-underline">
          <h3 className="text-white">
            Blog <span className="text-fuchsia-300">Abd.</span>
          </h3>
        </Link>
      </div>


      {/* navbar links for large screens */}
      <nav className="hidden lg:flex items-center space-x-8 text-lg">
        <Link href="/" className="no-underline hover:text-fuchsia-300">
          Home
        </Link>
        <Link href="/about" className="no-underline hover:text-fuchsia-300">
          About
        </Link>
        <Link href="/blogs" className="no-underline hover:text-fuchsia-300">
          Blogs
        </Link>
        <Link href="/contact-us" className="no-underline hover:text-fuchsia-300">
          Contact Us
        </Link>
      </nav>

   
      <div className="hidden lg:flex items-center space-x-4">
        <Link href="./login" className="no-underline">
          <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-white">
            Login
          </button>
        </Link>
        <Link href="./register" className="no-underline">
          <button className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg text-white">
            Register
          </button>
        </Link>
      </div>

      {/* sidebar for small Screens */}
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white bg-transparent text-[22px] border-none cursor-pointer"
        >
          ☰
        </button>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 lg:hidden">
          <div className="flex flex-col items-center space-y-8 text-lg">
            <button
              onClick={toggleSidebar}
              className="text-white mb-6 text-2xl cursor-pointer"
            >
              ✕ Close
            </button>
            <Link href="/" onClick={toggleSidebar} className="no-underline hover:text-fuchsia-300 text-white">
              Home
            </Link>
            <Link href="/about" onClick={toggleSidebar} className="no-underline hover:text-fuchsia-300 text-white">
              About
            </Link>
            <Link href="/blogs" onClick={toggleSidebar} className="no-underline hover:text-fuchsia-300 text-white">
              Blogs
            </Link>
            <Link href="/contact-us" onClick={toggleSidebar} className="no-underline hover:text-fuchsia-300 text-white">
              Contact Us
            </Link>
            <div className="flex gap-4 mt-6">
              <Link href="./login" onClick={toggleSidebar} className="no-underline">
                <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-white">
                  Login
                </button>
              </Link>
              <Link href="./register" onClick={toggleSidebar} className="no-underline">
                <button className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg text-white">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
