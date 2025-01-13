declare interface Post {
  title: string;
  slug: { current: string };
  author: any;
  publishedAt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
}

declare interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
}
