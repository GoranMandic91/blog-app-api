const getAllComments = {
  get: {
    tags: ['posts'],
    description: 'Get all comments for specific post',
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
    },
  },
};

export default getAllComments;
