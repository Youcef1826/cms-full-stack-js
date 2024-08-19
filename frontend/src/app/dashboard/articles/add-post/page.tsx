"use client";

import { addPost } from "@/services/blogApi";
import { Post } from "@/types/post";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPostPage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File>();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: Post = {
      title,
      content,
      image,
    };

    try {
      await addPost(data);
      router.push("/dashboard/articles");
    } catch (error) {
      console.log("Error add new post !");
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl my-6">Add new post</h1>
      <div className="p-6 bg-white border border-gray-200 rounded-sm shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Images
            </label>
            <input
              type="file"
              id="images"
              onChange={(e) => setImage(e.target.files![0])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#508249] hover:bg-[#42693d] text-[#e8e4e8] py-2 px-4 rounded-sm"
          >
            Add Post
          </button>
        </form>
      </div>
    </>
  );
}
