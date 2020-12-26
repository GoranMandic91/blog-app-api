import express from 'express';
import routes from './routes';
import swagger from '../swagger';
import bodyParser from 'body-parser';

export const start = async (): Promise<void> => {
  try {
    const server = express();
    const PORT = 8000;

    server.use(express.static('www'));
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())

    routes(server);
    swagger(server);

    server.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
      console.log(`⚡️[server]: Swagger docs available at http://localhost:${PORT}/docs`);
    });

  } catch (err) {
    console.error(`Error starting server: ${err.message}`);
    throw err;
  }
};
