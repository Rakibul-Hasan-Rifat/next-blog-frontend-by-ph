import { TPost } from "@/types";
import { Metadata, ResolvingMetadata } from "next";
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";

type Props = {
    params: Promise<{blogId: string}>,
    searchParams: Promise<{[key: string]: string | string[] | undefined}>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const generateMetadata = async (props: Props, parent: ResolvingMetadata): Promise<Metadata> => {

    const { blogId } = await props.params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${blogId}`);
    const post = await response.json();

    return {
        title: post.title,
        description: post.content.slice(0, 160),
        openGraph: {
            title: post.title,
            description: post.content.slice(0, 160),
            images: post.thumbnail ? [post.thumbnail] : undefined,
        }
    }
}

export const generateStaticParams = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`);
    const { data: posts } = await response.json();
    return posts.filter((post: TPost) => post.views >= 10).map((post: TPost) => ({ blogId: String(post.id) }));
}

const BlogDetailsPage = async (props: Props) => {
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