import BlogCard from "@/components/modules/Blogs/BlogCard";
import { TPost } from "@/types";

const AllBlogsPage = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`, {
    cache: "no-store"
  });
  const { data: posts } = await response.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto my-8">
        {
          posts.map((post: TPost) => <BlogCard key={post.id} post={post} />)
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
