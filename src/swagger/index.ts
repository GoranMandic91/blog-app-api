import { Express } from 'express';
import swaggerUI from 'swagger-ui-express';
import getAllComments from './posts/getAllComments';
import getAll from './posts/getAll';
import getOne from './posts/getOne';
import editOne from './comments/editOne';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    version: 'v0.0.1',
    title: 'blog-app-api',
    description: 'API for Simple Blog Application',
  },
  paths: {
    '/posts': getAll,
    '/posts/{id}': getOne,
    '/posts/{id}/comments': getAllComments,
    '/comments/{id}': editOne,
  },
};

const swagger = (server: Express) => {
  const options = {
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      filter: true,
      docExpansion: 'none',
      displayRequestDuration: true,
      defaultModelRendering: 'model',
    },
  };

  server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, options));
};

export default swagger;
