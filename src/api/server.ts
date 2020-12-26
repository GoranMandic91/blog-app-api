import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger';

export const start = async (): Promise<void> => {
  try {
    const app = express();
    const PORT = 8000;

    const options = {
      customCss: '.swagger-ui .topbar { display: none }',
      swaggerOptions: {
        filter: true,
        docExpansion: 'none',
        displayRequestDuration: true,
        defaultModelRendering: 'model',
      },
    };

    app.use(express.static('www'));
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, options));

    app.get('/', (_, res) => res.send('Blog Server Up!'));

    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
      console.log(`⚡️[server]: Swagger docs available at http://localhost:${PORT}/docs`);
    });
  } catch (err) {
    console.error(`Error starting server: ${err.message}`);
    throw err;
  }
};
