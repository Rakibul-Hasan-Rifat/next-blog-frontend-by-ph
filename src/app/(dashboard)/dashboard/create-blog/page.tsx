import React from "react";
import CreateBlogForm from "@/components/modules/Blogs/CreateBlogForm";

const CreateBlog = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-4xl mb-4">Create Blog</h1>
      <div className="">
        <CreateBlogForm />
      </div>
    </div>
  );
};

export default CreateBlog;
