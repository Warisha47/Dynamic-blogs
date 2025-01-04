import {client} from "../sanity/lib/client"

import BlogCard from "@/components/BlogCard";



export const revalidate = 10; //seconds


export default async function Home() {


const query= `*[_type == 'blog'] | order(_createdAt asc){
summary,title,image,
   'slug': slug.current}`;

  const posts:Blog[] = await client.fetch(query)
  // console.log(posts);
  
 
  return (
    <main>
      <h1 className="flex justify-center font-bold text-blue-800 font-serif text-3xl m-6">All About Lenovo Laptops</h1>
    <section className="grid grid-cols-3">
      {
        posts.map((post:Blog)=>(
          <BlogCard post = {post} key={post.slug}/>
        ))
         
}
</section>
        
      
   
    </main>
  )}
 