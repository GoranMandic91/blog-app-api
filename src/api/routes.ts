import { Express } from 'express';
import posts from './posts';

const routes = (server: Express) => {
  server.get('/health', (_, res) => res.send({ message: 'Blog server up!' }));
  server.get('/posts', posts.getAll);
};

export default routes;
