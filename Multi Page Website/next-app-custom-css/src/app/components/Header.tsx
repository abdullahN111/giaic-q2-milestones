"use client";

import { useState } from 'react';
import Styles from './Header.module.css';

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={Styles.headerContainer}>
      <div className={Styles.headerLeft}>
        <a href='/'>
          <h3 className={Styles.leftHeading}>
            Blog <span className={Styles.leftSpanColor}>Abd.</span>
          </h3>
        </a>
      </div>

      <div className={Styles.sidebarBtnContainer}>
        <button onClick={toggleSidebar} className={Styles.sidebarBtn}>
          ☰
        </button>
      </div>

      <div className={Styles.navbar}>
        <a href='/'>
          <li className={Styles.navbarLinks}>Home</li>
        </a>
        <a href='/about'>
          <li className={Styles.navbarLinks}>About</li>
        </a>
        <a href='/blogs'>
          <li className={Styles.navbarLinks}>Blogs</li>
        </a>
        <a href='/contact-us'>
          <li className={Styles.navbarLinks}>Contact Us</li>
        </a>
      </div>

      <div className={Styles.navbarBtn}>
        <a href='./login'>
          <p className={Styles.loginBtn}>
            Login
          </p>
        </a>

        <a href='./register'>
          <p className={Styles.registerBtn}>
            Register
          </p>
        </a>
      </div>

      {isSidebarOpen && (
        <div className={Styles.sidebarContainer}>
          <div className={Styles.sidebarLinks}>
            <p
              onClick={toggleSidebar}
              className={Styles.sidebarCloseBtn}
            >
              ✕ Close
            </p>
            <a href='/' onClick={toggleSidebar}>
              <li className={Styles.links}>Home</li>
            </a>
            <a href='/about' onClick={toggleSidebar}>
              <li className={Styles.links}>About</li>
            </a>
            <a href='/blogs' onClick={toggleSidebar}>
              <li className={Styles.links}>Blogs</li>
            </a>
            <a href='/contact-us' onClick={toggleSidebar}>
              <li className={Styles.links}>Contact Us</li>
            </a>
            <div className={Styles.sidebarBtnContainer}>
              <a href='./login'>
                <p
                  className={Styles.loginBtn}
                  onClick={toggleSidebar}
                >
                  Login
                </p>
              </a>
              <a href='./register'>
                <p
                  className={Styles.registerBtn}
                  onClick={toggleSidebar}
                >
                  Register
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
