/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default async function BlogDetailsCard({ blog }: { blog: any }) {
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found.</div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto py-30 px-4">
      <h1 className="text-5xl font-bold mb-6">{blog?.title}</h1>

      <div className="flex items-center gap-4 mb-8">
        <Image
          src={
            blog.user.picture ||
            "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
          }
          alt={blog?.user?.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">
            {blog.user.name}{" "}
            {blog.user.isVerified && (
              <span className="inline-block ml-1 text-blue-500">✔</span>
            )}
          </p>
          <p className="text-gray-500 text-sm">
            {new Date(blog.createdAt).toLocaleDateString()} • {blog.views} views
          </p>
        </div>
      </div>

      {blog.thumbnail && (
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none mt-8 text-justify font-light text-2xl text-gray-500">
        <p>{blog.content}</p>
      </article>
    </main>
  );
}
