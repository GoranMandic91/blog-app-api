import { Response, Request } from 'express';
import controllers from '../../controllers';

async function getOne(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const post = await controllers.posts.getOne(+id);
    return res.send({ data: post });
  } catch (error) {
    if (error.message === 'not-found') {
      return res.status(404).send({ message: 'Post not found!' });
    }
    return res.status(500).send({ message: 'Internal server error!' });
  }
}

export default getOne;
