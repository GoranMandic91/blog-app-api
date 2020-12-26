
export default {
  openapi: '3.0.0',
  info: {
    version: 'v0.0.1',
    title: 'blog-app-api',
    description: 'API for Simple Blog Application',
  },
  paths: {
    '/': {
      get: {
        tags: ['test'],
        description: 'test',
        produces: ['aplication/json'],
      }
    }
  }
}
