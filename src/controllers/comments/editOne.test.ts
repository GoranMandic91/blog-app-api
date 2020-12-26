import editOne from './editOne';

describe('getOne', () => {
  it('update comment by given id', async () => {
    const comment = await editOne(1, 'update name', 'update text');

    expect(comment).toBeDefined();
    expect(comment.id).toEqual(1);
    expect(comment.name).toEqual('update name');
    expect(comment.text).toEqual('update text');
  });

  it('throws not-found error if not exist', async () => {
    try {
      await editOne(0, 'update name', 'update text');
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual('not-found');
    }
  });
});
