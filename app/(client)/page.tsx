import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import PostComponent from "../components/PostComponent";
import { Fragment } from 'react';

async function getPosts() {
  const query = `
 *[_type == "post"] {
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

export const revalidate = 60;

export default async function Home() {
  const post = await getPosts();

  return (
    <Fragment>
      <Header title="Article" />
      {post.length > 0 &&
        post.map((p: Post) => <PostComponent key={p._id} post={p} />)}
    </Fragment>
  );
}
