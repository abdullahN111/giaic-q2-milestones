import Comment from "@/app/components/Comment";
import { BlogDetailType } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}']{
  "currentSlug": slug.current,
    title,
    content,
    titleImage
}[0]
    `;

  const data = await client.fetch(query);
  return data;
}

const Blog = async ({ params }: { params: { slug: string } }) => {
  const data: BlogDetailType = await getData(params.slug);

  return (
    <section className="my-10 flex flex-col items-center px-2 sm:px-5 md:px-0">
      <h1>
        <span className="block text-base text-center text-primary font-bold tracking-wide uppercase">
          M Abdullah - Blog
        </span>
        <span className="mt-2 block text-[28px] text-center leading-8 font-bold tracking-tight sm:text-[32px]">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        alt="Image"
        width={800}
        height={800}
        className="rounded-md mt-8 border"
        priority
      />
      <div className="mt-12 prose prose-blue prose-lg dark:prose-invert prose-headings:text-2xl prose-headings:font-bold prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>

      <Comment />
    </section>
  );
};

export default Blog;
