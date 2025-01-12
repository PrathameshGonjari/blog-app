
export const blockContent = {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      {
        type: 'block',
      },
      {
        type: 'image',
        fields: [
          {
            type: 'text',
            name: 'alt',
            title: 'alt',
          }
        ]
      }
    ],
  };
  