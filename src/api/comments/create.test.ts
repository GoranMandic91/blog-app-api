import setupRequestTest from '../../__test__/setup';
import commentsController from '../../controllers/comments';

jest.mock('../../controllers/comments');
const createMock = commentsController.create as jest.Mock;

const { request } = setupRequestTest();

describe('POST /comments', () => {
  const commentMock = {
    id: 1,
    name: 'new name',
    text: 'new text',
    postId: 1,
  };

  it('returns newly created comment', async () => {
    createMock.mockResolvedValueOnce(commentMock);

    await request()
      .post('/comments')
      .send({
        postId: 1,
        name: 'new name',
        text: 'new text',
      })
      .expect(201, { data: commentMock });
  });

  it('thows 400 if postId not in request body', async () => {
    await request()
      .post('/comments')
      .send({
        name: 'new name',
        text: 'new text',
      })
      .expect(400, { message: 'Bad request!' });
  });

  it('thows 400 if text not in request body', async () => {
    await request()
      .post('/comments')
      .send({
        postId: 1,
        name: 'new name',
      })
      .expect(400, { message: 'Bad request!' });
  });

  it('thows 404 if post not exists', async () => {
    createMock.mockRejectedValueOnce(new Error('not-found'));

    await request()
      .post('/comments')
      .send({
        postId: 1,
        name: 'new name',
        text: 'new text',
      })
      .expect(404, { message: 'Post not found!' });
  });

  it('thows 500 if internal server error occurs', async () => {
    createMock.mockRejectedValueOnce(new Error());

    await request()
      .post('/comments')
      .send({
        postId: 1,
        name: 'new name',
        text: 'new text',
      })
      .expect(500, { message: 'Internal server error!' });
  });
});
