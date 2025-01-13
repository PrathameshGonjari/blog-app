declare interface Post {
    _id: string; 
    title: string; 
    slug: { current: string }; 
    author: Author; 
    publishedAt: string; 
    body: BlockContent[]; 
    tags: Tag[]; 
  }
  
  declare interface Author {
    _id: string; 
    name: string; 
    bio?: string; 
  }
  
  declare type BlockContent = 
    | Block 
    | ImageBlock;
  
  declare interface Block {
    _key: string; 
    _type: 'block'; 
    children: InlineContent[]; 
    markDefs?: MarkDef[]; 
    style?: string; 
  }
  
  declare interface ImageBlock {
    _key: string; 
    _type: 'image'; 
    asset: { _ref: string; _type: string }; 
    alt?: string; 
  }
  
  declare interface InlineContent {
    _key: string; 
    _type: string; 
    text: string; 
    marks?: string[]; 
  }
  
  declare interface MarkDef {
    _key: string; 
    _type: string; 
    href?: string; 
  }
  
  declare interface Image {
    _type: string; 
    asset: { _ref: string; _type: string }; 
  }
  
  declare interface Tag {
    _id: string; 
    title: string; 
    slug: { current: string };
  }
  