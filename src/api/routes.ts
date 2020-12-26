import { Express } from 'express';
import posts from './posts';

const routes = (server: Express) => {
  server.get('/posts', posts.getAll);
  server.get('/posts/:id', posts.getOne);
  server.get('/posts/:id/comments', posts.getAllComments);
};

export default routes;
