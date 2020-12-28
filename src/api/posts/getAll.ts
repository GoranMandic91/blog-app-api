import { Response, Request } from 'express';
import postsController from '../../controllers/posts';

async function getAll(_: Request, res: Response): Promise<Response> {
  try {
    const allPosts = await postsController.getAll();
    return res.send({ data: allPosts });
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error!' });
  }
}

export default getAll;
