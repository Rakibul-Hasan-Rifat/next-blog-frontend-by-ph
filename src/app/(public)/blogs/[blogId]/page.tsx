import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { TPost } from "@/types";

export const generateStaticParams = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`);
    const { data: posts } = await response.json();
    return posts.filter((post: TPost) => post.views >= 10).map((post: TPost) => ({ blogId: String(post.id) }));

}

const BlogDetailsPage = async (props: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await props.params;
    console.log(blogId);

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${blogId}`, {
        next: {
            revalidate: 60
        }
    })

    const post = await response.json();
    console.log(post);

    return (
        <>
            <BlogDetailsCard blog={post} />
        </>
    )
}

export default BlogDetailsPage;