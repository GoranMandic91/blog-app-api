import { Express } from 'express';
import posts from './posts';

const routes = (server: Express) => {
  server.get('/posts', posts.getAll);
};

export default routes;
