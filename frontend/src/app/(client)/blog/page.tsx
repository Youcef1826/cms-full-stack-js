
import PostList from "@/components/PostList";
import { fetchPosts } from "@/services/blogApi";
import { Post } from "@/types/post";

export default async function BlogPage() {
  let posts: Post[] = [];

  try {
    posts = await fetchPosts();
  } catch (error) {
    console.log("Error fetching posts !");
  }

  return (
    <div>
      <h1>Blog page</h1>
      {posts.length ? (
        <PostList posts={posts} />
      ) : (
        <div>No articles available ...</div>
      )}
    </div>
  );
}