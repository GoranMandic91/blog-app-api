
import { Express } from 'express';
import swaggerUI from 'swagger-ui-express';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    version: 'v0.0.1',
    title: 'blog-app-api',
    description: 'API for Simple Blog Application',
  },
  paths: {
    '/health': {
      get: {
        tags: ['health'],
        description: 'Get API health status',
        produces: ['aplication/json'],
        responses: {
          200: {
            description: 'OK',
            content: {},
          },
        }
      }
    }
  }
}


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
}

export default swagger;

