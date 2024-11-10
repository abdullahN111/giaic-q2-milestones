import Link from "next/link";

function Blog() {
  return (
    <div className="border border-black m-10 mx-16 p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-3">Next.js 15</h2>
      <p>
        Next.js 15 is officially stable and ready for production. This release
        builds on the updates from both RC1 and RC2. We&apos;ve focused heavily on
        stability while adding some exciting updates we think you&apos;ll love.
      </p>
      <div className="mt-4 flex justify-between">
        <Link href="/blogs">
          <p className="text-blue-600 hover:underline">Read More</p>
        </Link>
        <Link href="/blogs">
          <p className="text-blue-600 hover:underline">See More Blogs</p>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
