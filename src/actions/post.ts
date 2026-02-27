"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const createPost = async (data: FormData) => {    
        const blogInfo = Object.fromEntries(data.entries());
        console.log(blogInfo);
        const modifiedData = { ...blogInfo, user: { connect: { id: 4 } }, tags: (blogInfo.tags as string).split(',').map((tag: string) => tag.trim()), isFeatured: blogInfo.isFeatured };
        console.log(modifiedData, process.env.NEXT_PUBLIC_BACKEND_URL);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modifiedData),
            // next: {tags: ['posts']}
        });

        console.log('Response:', await res.json());

        if (res.ok) {
            revalidateTag("BLOGS");
            redirect('/blogs');
        } else {
            console.error('Failed to create post');
        }
        
    
}

export { createPost };