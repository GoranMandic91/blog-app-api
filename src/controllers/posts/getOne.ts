import { Post } from '../../entities/post';
import posts from '../../mocks/posts';

async function getOne(id: number): Promise<Post> {
  const post = posts.find((p) => p.id === id);
  if (!post) {
    throw new Error('not-found');
  }
  return post;
}

export default getOne;
