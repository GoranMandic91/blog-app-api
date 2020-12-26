import { Comment } from '../../entities/comment';
import comments from '../../mocks/comments';

async function editOne(id: number, name: string, text: string): Promise<Comment> {
  const comment = comments.find((p) => p.id === id);
  if (!comment) {
    throw new Error('not-found');
  }

  comment.name = name;
  comment.text = text;

  return comment;
}

export default editOne;
