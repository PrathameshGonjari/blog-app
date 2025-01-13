import Link from "next/link";
import React from "react";

interface PostProps {
  readonly post: Post;
}

const cardStyle = `
  mb-6
  p-6
  border
  border-gray-300
  rounded-lg
  shadow-lg
  transition
  duration-300
  ease-in-out
  transform
  hover:scale-105
  hover:shadow-xl
  hover:border-gray-500
  dark:border-gray-700
  dark:shadow-gray-700
  hover:dark:border-gray-500
  hover:dark:bg-gray-900
`;

const titleStyle = `
  text-lg
  font-bold
  mb-2
  text-gray-800
  dark:text-gray-200
  hover:text-blue-600
  dark:hover:text-blue-400
  transition
  duration-200
`;

const metadataStyle = `
  text-sm
  text-gray-600
  dark:text-gray-400
  mb-1
`;

const authorStyle = `
  text-sm
  text-gray-800
  dark:text-gray-300
  font-medium
`;

function PostComponent({ post }: PostProps) {
  return (
    <div className={cardStyle}>
      <Link href={`/${post.slug.current}`}>
        <h2 className={titleStyle}>{post.title}</h2>
        <p className={metadataStyle}>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        <p className={authorStyle}>Author: {post.author?.name || "Unknown"}</p>
      </Link>
    </div>
  );
}

export default PostComponent;
