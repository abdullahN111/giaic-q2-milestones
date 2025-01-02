import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 lg:py-6 max-w-4xl mx-auto h-[90px] flex flex-col lg:flex-row items-center justify-center gap-3 lg:justify-between dark:text-white w-full border-t">
      <p className="flex gap-1 sm:gap-[6px] items-center justify-center">
        <span>© 2024</span>
        <Link href="/" className="hover:underline text-primary">
          {" "}
          Abd Blog.
        </Link>
        All Rights Reserved.
      </p>
      <div className="flex items-center gap-3">
        <Link href="https://www.linkedin.com/in/m-abdullah-nadeem/" className="text-2xl" target="_blank">
          <CiLinkedin />
        </Link>
        <Link href="https://github.com/abdullahN111" className="text-2xl" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://www.instagram.com/i_abdullahn/" className="text-2xl" target="_blank">
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
