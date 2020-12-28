import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';
import swagger from '../swagger';

const start = async (): Promise<http.Server> => {
  try {
    const server = express();
    const PORT = process.env.PORT || 4000;

    server.use(express.static('www'));
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(cors());
    server.use(morgan('[:date[clf]] ":method::url" :status :res[content-length] - :response-time ms'));

    routes(server);
    swagger(server);

    return server.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
      console.log(`⚡️[server]: Swagger docs available at http://localhost:${PORT}/docs`);
    });
  } catch (err) {
    console.error(`Error starting server: ${err.message}`);
    throw err;
  }
};

export const startInTestMode = async (): Promise<http.Server> => {
  try {
    const server = express();
    const PORT = 4001;

    server.use(bodyParser.json());
    routes(server);

    return server.listen(PORT);
  } catch (err) {
    console.error(`Error starting test server: ${err.message}`);
    throw err;
  }
};

export default start;
