import { client } from "@/sanity/lib/client";

async function getPosts() {
  const query = `
  *[_type == "post"] {
  title,
  slug,
    author,
    publishedAt,
    body
}
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const post = await getPosts();
  console.log("post: ", post);
  return <div>hello world</div>;
}
