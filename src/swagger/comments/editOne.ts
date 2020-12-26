const editOne = {
  put: {
    tags: ['comments'],
    description: 'Update single comment',
    produces: ['aplication/json'],
    parameters: [{
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'integer',
        minimum: 1,
      },
    }],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              text: { type: 'string' },
            },
            example: {
              name: 'Comment name',
              text: 'Comment text',
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {},
      },
      404: {
        description: 'Comment Not Found',
        content: {},
      },
    },
  },
};

export default editOne;
