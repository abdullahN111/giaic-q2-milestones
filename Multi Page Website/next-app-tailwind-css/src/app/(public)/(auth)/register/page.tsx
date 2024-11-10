"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="w-full max-w-sm mx-auto mt-20 mb-20 sm:mb-18 p-6 border border-gray-300 shadow-lg rounded-lg">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">Register here!</h1>
      </div>

      <div className="border border-gray-400 rounded-lg flex items-center px-3 py-2 my-6">
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full focus:outline-none"
        />
      </div>
      <div className="border border-gray-400 rounded-lg flex items-center px-3 py-2 my-6">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full focus:outline-none"
        />
      </div>
      <div className="relative flex items-center border border-gray-400 rounded-lg px-3 py-2">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          name="password"
          className="w-full focus:outline-none"
        />
        <span className="absolute right-3 cursor-pointer" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
        </span>
      </div>
      <div className="relative flex items-center border border-gray-400 rounded-lg px-3 py-2 my-6">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Confirm your password"
          name="password"
          className="w-full focus:outline-none"
        />
        <span className="absolute right-3 cursor-pointer" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
        </span>
      </div>
      <div className="mb-6 text-center bg-green-600 text-white rounded-lg px-3 py-2 mt-8 hover:bg-green-700 cursor-pointer">
        <button>Register</button>
      </div>
    </form>
  );
}

export default Register;
