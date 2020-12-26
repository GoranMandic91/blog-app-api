import { Comment } from '../../entities/comment';
import comments from '../../mocks/comments';
import posts from '../../mocks/posts';

async function create(postId: number, name: string, text: string): Promise<Comment> {
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    throw new Error('not-found');
  }

  const id = Math.max(...comments.map((c) => c.id)) + 1;
  const comment = {
    id, name, text, postId,
  };

  comments.push(comment);
  return comment;
}

export default create;
