import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import PostComponent from "../components/PostComponent";
import { Fragment } from "react";

async function getPosts() {
  const query = `
    *[_type == "post"] {
      _id,
      title,
      slug,
      "author": author->{
        _id,
        name,
        bio
      },
      publishedAt,
      body
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 10;

export default async function Home() {
  const posts = await getPosts();

  return (
    <Fragment>
      <Header title="Article" />
      {posts.length > 0 &&
        posts.map((post: Post) =>
          post?._id ? <PostComponent key={post._id} post={post} /> : null
        )}
    </Fragment>
  );
}
