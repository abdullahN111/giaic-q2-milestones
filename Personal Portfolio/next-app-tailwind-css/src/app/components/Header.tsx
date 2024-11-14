"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-[#1b1616b3] text-white h-[87px] flex items-center top-0 fixed w-full z-[1]">
      <div className="max-w-[1200px] w-full flex items-center justify-between mx-auto lg:px-12 md:px-10 sm:px-8 px-6">
        <div className="text-xl cursor-pointer">
          <Link href="/">
            <p className="text-white font-medium">
              Portfolio <span className="text-[#ee1d47] font-semibold">Abd.</span>
            </p>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-14">
          <ul className="flex gap-8">
            <Link href="/">
              <li className="list-none text-[15px] uppercase font-light text-white hover:text-[#ee1d47] cursor-pointer transition duration-500">Home</li>
            </Link>
            <Link href="/about">
              <li className="list-none text-[15px] uppercase font-light text-white hover:text-[#ee1d47] cursor-pointer transition duration-500">About</li>
            </Link>
            <Link href="/projects">
              <li className="list-none text-[15px] uppercase font-light text-white hover:text-[#ee1d47] cursor-pointer transition duration-500">Projects</li>
            </Link>
            <Link href="/contact">
              <li className="list-none text-[15px] uppercase font-light text-white hover:text-[#ee1d47] cursor-pointer transition duration-500">Contact</li>
            </Link>
          </ul>
          <div className="flex items-center gap-[18px]">
            <i style={{ fontSize: '1.2rem' }} className="fa fa-search text-white hover:text-[#ee1d47] hover:text-[22px] cursor-pointer transition duration-500"></i>
            <input
              type="text"
              placeholder="Search here"
              className="px-1 py-[7px] rounded-[5px] border-none"
            />
          </div>
        </nav>
        <div className="lg:hidden relative rounded-[5px] py-2 px-3 cursor-pointer hover:bg-[#2b2a2a7e]" style={{ border: '1px solid #f2677582' }}>
  <label
    onClick={toggleSidebar}
    className="fa fa-navicon text-white text-2xl cursor-pointer"
  ></label>
</div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="flex flex-col items-center gap-8">
            <p onClick={toggleSidebar} className="text-white text-lg cursor-pointer hover:text-[#ee1d47]">✕ Close</p>
            <Link href="/" onClick={toggleSidebar}>
              <li className="text-white list-none text-lg hover:text-[#ee1d47] cursor-pointer">Home</li>
            </Link>
            <Link href="/about" onClick={toggleSidebar}>
              <li className="text-white list-none text-lg hover:text-[#ee1d47] cursor-pointer">About</li>
            </Link>
            <Link href="/projects" onClick={toggleSidebar}>
              <li className="text-white list-none text-lg hover:text-[#ee1d47] cursor-pointer">Projects</li>
            </Link>
            <Link href="/contact" onClick={toggleSidebar}>
              <li className="text-white list-none text-lg hover:text-[#ee1d47] cursor-pointer">Contact Us</li>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
