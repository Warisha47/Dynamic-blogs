
import { client } from "@/sanity/lib/client";

import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
import { components } from "../../../components/CustomComponent";
import CommentBox from "../../../components/CommentBox";


export const revalidate = 10; //seconds

const page = async({ params :{slug} }: { params: { slug: string } }) => {
 
  
  const query = `*[_type == 'blog' && slug.current== "${slug}"]{
  title,summary,image,content,
    author->{name,bio,image}
}[0]`;
  const post = await client.fetch(query);
  console.log(post);

  return (
    <article className="mt-12 mb-24 md:px-2 flex flex-col font-serif m-12 gap-y-12">
      {/* Blog Title */}
      <h1 className="md:text-3xl underline font-bold wrapper  text-black dark:text-white ">
        {post.title}
      </h1>

      {/* Feature Image */}
      <Image
        src={urlFor(post.image)}
        alt="author image"
        width={600}
        height={600}
        className="rounded wrapper"
      />

      {/* Blog summary section */}

      <section>
        <h2 className="text-xl  font-bold uppercase text-fuchsia-700  ">
          Summary
        </h2>
        <p className="md:text-lg font-serif leading-relaxed text-justify wrapper text-black/80 dark:text-white/80">
          {post.summary}
        </p>
      </section>

      {/* Author section (Image & bio) */}
      <section className="md:px-2 flex gap-2 items-start">
        <Image
          src={urlFor(post.author.image)}
          alt="author image"
          height={400}
          width={400}
          className="object-cover rounded-full md:h-16 md:w-16 "
        />
        <div className="flex flex-col gap-1">
          <h3> {post.author.name}</h3>
          <p className="italic font-medium text-md text-black/80 dark:text-white/80">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Main body of blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-white/80">
        <PortableText value={post.content} components={components} />
      </section>
      <CommentBox />
    </article>
  );
};

export default page;
