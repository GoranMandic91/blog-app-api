const editOne = {
  post: {
    tags: ['comments'],
    description: 'Create new comment',
    produces: ['aplication/json'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              postId: { type: 'integer' },
              name: { type: 'string' },
              text: { type: 'string' },
            },
            example: {
              postId: 1,
              name: 'New comment name',
              text: 'New comment text',
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'OK',
        content: {},
      },
      404: {
        description: 'Post Not Found',
        content: {},
      },
    },
  },
};

export default editOne;
