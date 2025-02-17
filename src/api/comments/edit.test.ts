import setupRequestTest from '../../__test__/setup';
import commentsController from '../../controllers/comments';

jest.mock('../../controllers/comments');
const editMock = commentsController.edit as jest.Mock;

const { request } = setupRequestTest();

describe('PUT /comments/:id', () => {
  const commentMock = {
    id: 1,
    name: 'updated name',
    text: 'updated text',
    postId: 1,
  };

  it('returns updated comment by id', async () => {
    editMock.mockResolvedValueOnce(commentMock);

    await request()
      .put('/comments/1')
      .send({
        name: 'updated name',
        text: 'updated text',
      })
      .expect(200, { data: commentMock });

    expect(editMock).toBeCalledWith(1, 'updated name', 'updated text');
  });

  it('thows 404 if comment not exists', async () => {
    editMock.mockRejectedValueOnce(new Error('not-found'));

    await request()
      .put('/comments/1')
      .send({
        name: 'updated name',
        text: 'updated text',
      })
      .expect(404, { message: 'Comment not found!' });
  });

  it('thows 500 if internal server error occurs', async () => {
    editMock.mockRejectedValueOnce(new Error());

    await request()
      .put('/comments/1')
      .send({
        name: 'updated name',
        text: 'updated text',
      })
      .expect(500, { message: 'Internal server error!' });
  });
});
