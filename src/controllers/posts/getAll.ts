import { Post } from '../../entities/post';
import comments from '../../mocks/comments';
import posts from '../../mocks/posts';

async function getAllPosts(): Promise<Post[]> {
  const allPosts = posts.map((post) => {
    const numOfComments = comments.reduce((acc, c) => (c.postId === post.id ? acc + 1 : acc), 0);
    return {
      ...post,
      numOfComments,
    };
  });
  return allPosts;
}

export default getAllPosts;
