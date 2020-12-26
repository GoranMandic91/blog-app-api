import create from './create';
import comments from '../../mocks/comments';

describe('create', () => {
  it('create new comment', async () => {
    const id = Math.max(...comments.map((c) => c.id)) + 1;
    const comment = await create(1, 'new name', 'new text');

    expect(comment).toBeDefined();
    expect(comment.id).toEqual(id);
    expect(comment.name).toEqual('new name');
    expect(comment.text).toEqual('new text');
    expect(comment.postId).toEqual(1);
  });

  it('throws not-found error if post not exist', async () => {
    try {
      await create(0, 'update name', 'update text');
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual('not-found');
    }
  });
});
