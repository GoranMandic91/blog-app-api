import { Response, Request } from 'express';
import commentsController from '../../controllers/comments';

async function create(req: Request, res: Response) {
  try {
    const { postId, text, name } = req.body;
    if (!postId || !text) {
      throw new Error('bad-request');
    }
    const comment = await commentsController.create(postId, name || '', text);
    return res.status(201).send({ data: comment });
  } catch (error) {
    switch (error.message) {
      case 'bad-request':
        return res.status(400).send({ message: 'Bad request!' });
      case 'not-found':
        return res.status(404).send({ message: 'Post not found!' });
      default:
        return res.status(500).send({ message: 'Internal server error!' });
    }
  }
}

export default create;
