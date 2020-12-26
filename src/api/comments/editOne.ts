import { Response, Request } from 'express';
import commentsController from '../../controllers/comments';

async function editOne(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { text, name } = req.body;

    const comment = await commentsController.editOne(+id, name, text);
    return res.send({ data: comment });
  } catch (error) {
    if (error.message === 'not-found') {
      return res.status(404).send({ message: 'Comment not found!' });
    }
    return res.status(500).send({ message: 'Internal server error!' });
  }
}

export default editOne;
