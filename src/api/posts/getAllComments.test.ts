import setupRequestTest from '../../__test__/setup';
import commentsController from '../../controllers/comments';

jest.mock('../../controllers/comments');
const getAllCommentsMock = commentsController.getAll as jest.Mock;

const { request } = setupRequestTest();

describe('GET /posts/{id}/comments', () => {
  const commentsMock = [{
    id: 1,
    name: 'Blog Post Title 1',
    text: 'Lorem Impsum 1',
    postId: 1,
  }, {
    id: 2,
    title: 'Blog Post Title 2',
    content: 'Lorem Impsum 2',
    postId: 1,
  }];

  it('returns all comments for specific post', async () => {
    getAllCommentsMock.mockResolvedValueOnce(commentsMock);

    await request()
      .get('/posts/1/comments')
      .expect(200, { data: commentsMock });
  });
});
