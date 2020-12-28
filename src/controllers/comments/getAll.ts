import { Comment } from '../../entities/comment';
import comments from '../../mocks/comments';
import posts from '../../mocks/posts';

async function getAll(id: number): Promise<Comment[]> {
  const post = posts.find((p) => p.id === id);
  if (!post) {
    throw new Error('not-found');
  }
  return comments.filter((c) => c.postId === id);
}

export default getAll;
