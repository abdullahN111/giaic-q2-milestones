'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Styles from './Login.module.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className={Styles.formContainer}>
      <div className={Styles.headingContainer}>
        <h1 className={Styles.heading}>User Login</h1>
      </div>

      <div className={Styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter your email"
          className={Styles.input}
        />
      </div>
      <div className={Styles.inputContainer}>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          name="password"
          className={Styles.input}
        />
        <span
          className={Styles.eyeToggle}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
        </span>
      </div>
      <div className={Styles.loginBtn}>
        <button className={Styles.btnMain}>Login</button>
      </div>
    </form>
  );
}

export default Login;
