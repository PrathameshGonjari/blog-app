import { type SchemaTypeDefinition } from 'sanity';
import { post } from './post';
import { blockContent } from './blockContent';
import { author } from './author';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, author],
};
