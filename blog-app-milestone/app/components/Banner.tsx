import Image from "next/image";
import HeroImage from "../assets/images/HeroImage.jpg";
import Link from "next/link";



interface BannerProps {
    title: string;
    desc: string;
    button?: string;
    href?: string;
}

const Banner = ({title, desc, button, href}: BannerProps) => {
  return (
    <section className="relative w-full h-[80vh] sm:h-[60vh] max-w-[1440px] mx-auto">
      <Image
        src={HeroImage}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-center px-6 sm:px-12">
        <h1 className="text-4xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg max-w-3xl mb-6">
          {desc}
        </p>
        {button && href && (
          <Link
            href={href}
            className="bg-primary text-white py-2 px-6 rounded-full text-lg"
          >
            {button}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Banner;
