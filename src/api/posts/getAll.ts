import { Response, Request } from 'express';
import controllers from '../../controllers';

async function getAll(_: Request, res: Response) {
  const posts = controllers.posts.getAll();
  return res.send({ data: posts });
}

export default getAll;
