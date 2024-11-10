import Link from "next/link";

function About() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center pb-6 sm:pb-10">
      <div className="max-w-2xl m-auto p-8 bg-white shadow-lg rounded-lg border border-gray">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-gray-700 text-md leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          esse nam rerum cupiditate? Perferendis repudiandae accusamus iure
          velit? Modi, ut nostrum. Odio quibusdam doloribus, nemo dicta
          assumenda voluptatum. Numquam consequuntur eveniet cum optio expedita
          omnis ipsum aspernatur, culpa natus! Cum deserunt accusamus magnam a
          ex voluptatibus facilis quo maxime quae.
        </p>
        <p className="mt-6 text-gray-600">
          Contact us:{" "}
          <a
            href="mailto:myselfabdullah360@gmail.com"
            className="text-blue-600"
          >
            myselfabdullah360@gmail.com
          </a>
        </p>
        <p className="mt-1 text-gray-600">
          Or see our
          <Link href="/contact-us">
            {" "}
            <span className="text-blue-600">Contact Page</span>{" "}
          </Link>
        
        </p>
      </div>
    </main>
  );
}

export default About;
