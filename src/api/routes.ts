import { Express } from 'express';
import comments from './comments';
import posts from './posts';

const routes = (server: Express) => {
  server.get('/posts', posts.getAll);
  server.get('/posts/:id', posts.getOne);
  server.get('/posts/:id/comments', posts.getAllComments);
  server.put('/comments/:id', comments.editOne);
};

export default routes;
