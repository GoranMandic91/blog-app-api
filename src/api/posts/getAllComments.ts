import { Response, Request } from 'express';
import commentsController from '../../controllers/comments';

async function getAllComments(req: Request, res: Response) {
  const { id } = req.params;
  const allComments = await commentsController.getAll(+id);
  return res.send({ data: allComments });
}

export default getAllComments;
