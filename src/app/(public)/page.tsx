import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { TPost } from "@/types";

export default async function HomePage() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60
    }
  });
  const { data: posts } = await response.json();
  console.log(posts);

  return (
    <div>
      <Hero />
      <div className="my-16">
        <h2 className="text-center my-5 text-4xl font-bold">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto my-10 p-4">
          {
            posts.map((post: TPost) => <BlogCard key={post.id} post={post} />)
          }
        </div>
      </div>
    </div>
  );
}
