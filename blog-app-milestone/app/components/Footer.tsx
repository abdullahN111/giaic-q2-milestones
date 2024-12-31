import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-16 flex items-center justify-center dark:text-white w-full border-t">
      <p className="flex gap-[5px] items-center justify-center">
        <span>© 2024</span>
        <Link href="/" className="hover:underline text-primary">
          {" "}
          Abd Blog.
        </Link>
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
