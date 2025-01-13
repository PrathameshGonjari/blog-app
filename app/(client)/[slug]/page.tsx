import Header from "@/app/components/Header";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const query = `*[_type == "post"] { slug }`;
  const posts = await client.fetch(query);
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}


async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      "author": author->{
          _id,
          name,
          bio
        },
      publishedAt,
      body
    }`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function page({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="text-center mb-8">
        <Header title={post.title} />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">By {post.author.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>
      <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 space-y-8">
        <PortableText
          value={post.body}
        />
      </div>
    </div>
  );
}
