"use server";

import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const createPost = async (data: FormData) => {
    console.log({ ...data, blogId: 107 });
    const blogInfo = Object.fromEntries(data.entries());
    const modifiedData = { ...blogInfo, authorId: 4, tags: (blogInfo.tags as string).split(',').map((tag: string) => tag.trim()), isFeatured: blogInfo.isFeatured };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifiedData),
        next: {tags: ['posts']}
    });
    if (!response.ok) {
        throw new Error('Failed to create post');
    }

    const result = await response.json();
    if (result.success) {
        toast.success('Post created successfully!');
        redirect('/blogs'); // Redirect to the blogs page after successful creation
    }

}

export { createPost };