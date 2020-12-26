import { Express } from 'express';

const routes = (server: Express) => {
  server.get('/health', (_, res) => res.send({ message: 'Blog server up!' }))
}

export default routes
