import { Response, Request } from 'express';
import commentsController from '../../controllers/comments';

async function getAllComments(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params;
    const allComments = await commentsController.getAll(+id);
    return res.send({ data: allComments });
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error!' });
  }
}

export default getAllComments;
