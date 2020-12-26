const getAll = {
  get: {
    tags: ['posts'],
    description: 'Get all posts',
    produces: ['aplication/json'],
    responses: {
      200: {
        description: 'OK',
        content: {},
      },
    },
  },
};

export default getAll;
