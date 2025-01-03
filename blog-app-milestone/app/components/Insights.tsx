import Link from "next/link";

const Insights = () => {
  return (
    <section className="max-w-[1440px] mx-auto flex gap-6 flex-col justify-between items-center px-4 my-4 border-t py-10">
      <div className="flex flex-col items-center gap-4 sm:w-[500px] w-auto">
        <h3 className="text-3xl font-bold">About Us</h3>
        <p className="text-base text-slate-500 text-center">
          Abd Blog is your space for ideas, inspiration, and the latest updates.
          We share valuable insights to keep you informed and inspired on your
          journey.
        </p>
        <p className="text-base text-slate-500 text-center">
          Discover insights, ideas, and the latest trends with Abd Blog. Stay
          inspired and informed with content tailored just for you. Subscribe
          now to never miss an update!
        </p>
      </div>
      <div className="flex flex-wrap gap-[10px] mt-6">
        <input
          type="text"
          placeholder="Enter Your Email Address"
          className="outline-none border-b-[2px] border-black
"
        />
        <Link href={"/"}>
          <p className="text-sm border-b-[2px] border-black uppercase cursor-pointer hover:border-primary hover:text-primary">
            Subscribe
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Insights;
