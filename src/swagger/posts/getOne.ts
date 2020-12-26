const getOne = {
  get: {
    tags: ['posts'],
    description: 'Get single post',
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
    responses: {
      200: {
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

export default getOne;
