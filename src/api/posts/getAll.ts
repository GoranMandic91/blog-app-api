import { Response, Request } from 'express';
import controllers from '../../controllers';

async function getAll(_: Request, res: Response) {
  const allPosts = await controllers.posts.getAll();
  return res.send({ data: allPosts });
}

export default getAll;
