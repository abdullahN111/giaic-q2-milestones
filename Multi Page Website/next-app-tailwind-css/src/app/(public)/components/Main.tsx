
import React from "react";
import Blog from "./Blog";

function Main() {
  return (
    <main className="mx-4 pb-6 sm:pb-10">
      <div className="max-w-6xl m-auto mt-16 p-8 bg-white shadow-lg rounded-lg border border-gray-600">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Blog Abd.</h1>
        <p className="text-gray-700 text-md leading-relaxed">
        This website is dedicated to exploring the latest in programming technologies. Here, you&apos;ll find insightful articles, and resources on a range of topics—from popular front-end frameworks like React and Vue, to powerful back-end solutions such as Node.js and Django. Whether you&apos;re interested in mastering databases, delving into DevOps tools, or staying updated on emerging tech trends, iBlog is your go-to destination for everything related to programming and development. Join us as we dive into the tools and techniques that drive the digital world forward.
        </p>
      </div>

      <Blog></Blog>
      <Blog></Blog>
    </main>
  );
}

export default Main;
