"use client";

import { fetchPosts, deletePost } from "@/services/blogApi";
import { Post } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ManagePostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.log("Error fetching posts !");
      }
    };
    getPosts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.log(`Error deleting post with id ${id}!`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Blog section</h1>
        <div>
          <button className="bg-[#508249] hover:bg-[#42693d] text-[#e8e4e8] py-2 px-4 rounded-sm">
            <Link href={"articles/add-post"}>Add post</Link>
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {posts.length ? (
          posts.map((post) => (
            <li
              className="flex flex-col border-[1px] rounded-sm py-2 px-4 shadow-sm bg-white"
              key={post._id}
            >
              <h2 className="font-medium">{post.title}</h2>
              <div className="flex gap-3">
                <Link
                  className="text-blue-800"
                  href={`articles/edit/${post._id}`}
                >
                  Edit
                </Link>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
              </div>
            </li>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </ul>
    </div>
  );
}
