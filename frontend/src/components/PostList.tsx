
import Link from "next/link";
import { Post } from "@/types/post";
import Image from "next/image";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  <ul>
    {posts.map((post) => (
      <article key={post.id}>
        <Image src={post.images} width={350} height={200} alt={post.title} />
        <Link href={`/blog/${post._id}`}>
          <h2>{post.title}</h2>
          <p className="truncate">{post.content}</p>
        </Link>
      </article>
    ))}
  </ul>
};