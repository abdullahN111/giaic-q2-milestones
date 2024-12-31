'use client'

import { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import { BlogType } from "../lib/interface";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { urlFor } from "../lib/sanity";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonProps {
  primaryBtn?: string;
  secondaryBtn?: string;
  primaryBtnUrl?: string;
  heading: string;
}

async function getData(startIndex: number) {
  const query = `*[_type == 'blog'] | order(_createdAt desc) [${startIndex}...${startIndex + 6}] {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export default function Blogs({ primaryBtn, secondaryBtn, heading }: ButtonProps) {
  const [posts, setPosts] = useState<BlogType[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const newPosts = await getData(startIndex);
      setPosts(newPosts); 
      if (newPosts.length < 6) {
        setHasMorePosts(false);
      }
    };

    loadPosts(); 
  }, []); 

  const handleLoadMore = async () => {
    const newStartIndex = startIndex + 6;
    setStartIndex(newStartIndex); 
    const newPosts = await getData(newStartIndex);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    if (newPosts.length < 6) {
      setHasMorePosts(false); 
    }
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold text-[32px] mt-12">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10 px-4 sm:px-0">
        {posts.map((post, index) => (
          <Card key={index} className="mx-auto max-w-[350px] w-full">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg sm:text-xl line-clamp-2 font-bold">
                {post.title}
              </h3>
              <p className="line-clamp-4 text-sm sm:text-[15px] mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {hasMorePosts && primaryBtn === "See More" && (
        <Button className="mb-12 bg-primary text-lg" onClick={handleLoadMore}>
          {primaryBtn || "See More"}
        </Button>
      )}

      {secondaryBtn && (
   <Button className="mb-12 bg-primary text-lg">
    <Link href='/blogs'>

          {secondaryBtn}
    </Link>
        </Button>
      )}
    </section>
  );
}
