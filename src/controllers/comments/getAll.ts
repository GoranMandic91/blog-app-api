import { Comment } from '../../entities/comment';
import comments from '../../mocks/comments';

async function getAll(id: number): Promise<Comment[]> {
  return comments.filter((c) => c.postId === id);
}

export default getAll;
