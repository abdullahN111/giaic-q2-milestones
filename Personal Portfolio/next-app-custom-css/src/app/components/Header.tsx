"use client";

import { useState } from "react";
import Styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header className={Styles.header}>
      <div className={Styles.headerContainer}>
        <div className={Styles.brandContainer}>
          <Link href="/">
            <p className={Styles.brandName}>
              Portfolio <span>Abd.</span>
            </p>
          </Link>
        </div>
        <nav className={Styles.navbar}>
          <ul className={Styles.itemsContainer}>
            <Link href="/">
              <li className={Styles.items}>Home</li>
            </Link>
            <Link href="/about">
              <li className={Styles.items}>About</li>
            </Link>
            <Link href="/projects">
              <li className={Styles.items}>Projects</li>
            </Link>
            <Link href="/contact">
              <li className={Styles.items}>Contact</li>
            </Link>
          </ul>
          <div className={Styles.searchContainer}>
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search here"
              className={Styles.input}
            />
          </div>
        </nav>
        <div className={Styles.sidebar}>
          <label onClick={toggleSidebar} className="fa fa-navicon"></label>

          {isSidebarOpen && (
            <div className={Styles.sidebarContainer}>
              <div className={Styles.sidebarLinks}>
                <p onClick={toggleSidebar} className={Styles.sidebarCloseBtn}>
                  ✕ Close
                </p>
                <Link href="/" onClick={toggleSidebar}>
                  <li className={Styles.links}>Home</li>
                </Link>
                <Link href="/about" onClick={toggleSidebar}>
                  <li className={Styles.links}>About</li>
                </Link>
                <Link href="/projects" onClick={toggleSidebar}>
                  <li className={Styles.links}>Projects</li>
                </Link>
                <Link href="/contact" onClick={toggleSidebar}>
                  <li className={Styles.links}>Contact Us</li>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
