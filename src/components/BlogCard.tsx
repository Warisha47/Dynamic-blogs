import React from 'react' 
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const BlogCard = ( {post}:{post:Blog}) => {
    // console.log(post);
    
    
  return (
    <div>
            <section className=" flex flex-col justify-between wrapper  text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex  flex-wrap -m-4">
      <div className="p-4 md:w-full">
        <div className="h-[600px]  border-2 border-gray-200 shadow-md border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className=" md:h-60 w-full object-cover object-center"
            src ={urlFor(post.image)}
            alt="blog"
            width={400}
            height={400}
            
          />
         
          
          <div className="p-6">
            <h1 className="tracking-widest text-xs title-font font-medium text-blue-600 mb-1">
            {post.title}
            </h1>
            
            <p className="leading-relaxed mb-2">
              {post.summary}
            </p>

            {/* read more dynamic link */}

            <Link href={`/blog/${post.slug}`} className=' text-center hover:text-blue-500 bg-red-200 rounded  text-blue-800 hover:cursor-pointer font-semibold p-[10px]'>
            Read More
            </Link>
        
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default BlogCard