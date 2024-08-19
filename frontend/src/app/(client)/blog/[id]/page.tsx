
import { fetchPostByID } from "@/services/blogApi";
import { Post } from "@/types/post";
import Image from "next/image";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  let post: Post | null = null;

  try {
    post = await fetchPostByID(params.id);
  } catch (error) {
    console.log(`Error fetching post with id !`);
  }

  return (
    <div>
      {post ? (
        <article>
          <Image src={post.images} width={500} height={500} alt={post.title} />
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </article>
      ) : (
        <div>Post not found !</div>
      )}
    </div>
  );
}