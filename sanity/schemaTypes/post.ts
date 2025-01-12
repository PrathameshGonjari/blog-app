import { init } from 'next/dist/compiled/webpack/webpack';
import { Rule } from 'sanity';

export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().error("Required"),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
        validation: (Rule: Rule) => Rule.required().error("Required"),
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
        validation: (Rule: Rule) => Rule.required().error("Required"),
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  };
  