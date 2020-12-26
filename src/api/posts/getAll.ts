import { Response, Request } from 'express';
import postsController from '../../controllers/posts';

async function getAll(_: Request, res: Response) {
  const allPosts = await postsController.getAll();
  return res.send({ data: allPosts });
}

export default getAll;
