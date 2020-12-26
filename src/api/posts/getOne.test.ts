import setupRequestTest from '../../__test__/setup';
import controllers from '../../controllers';

jest.mock('../../controllers');
const getAllOneMock = controllers.posts.getOne as jest.Mock;

const { request } = setupRequestTest();

describe('GET /posts/:id', () => {
  const postMock = {
    id: 1,
    title: 'Blog Post Title 1',
    content: 'Lorem Impsum 1',
    comments: [{
      id: 1,
      name: 'Blog Post name 1',
      text: 'Comment Lorem Impsum 1',
      postId: 1,
    },
    {
      id: 2,
      name: 'Blog Post name 2',
      text: 'Comment Lorem Impsum 2',
      postId: 1,
    }],
  };

  it('returns post by id', async () => {
    getAllOneMock.mockResolvedValueOnce(postMock);

    await request()
      .get('/posts/1')
      .expect(200, { data: postMock });
  });

  it('thows 404 if post not exists', async () => {
    getAllOneMock.mockRejectedValueOnce(new Error('not-found'));

    await request()
      .get('/posts/0')
      .expect(404, { message: 'Post not found!' });
  });

  it('thows 404 if post not exists', async () => {
    getAllOneMock.mockRejectedValueOnce(new Error());

    await request()
      .get('/posts/0')
      .expect(500, { message: 'Internal server error!' });
  });
});
