import getOne from './getOne';

describe('getOne', () => {
  it('gets single post', async () => {
    const post = await getOne(1);

    expect(post).toBeDefined();
    expect(post.id).toEqual(1);
    expect(post.title).toEqual('Blog Post Title 1');
    expect(post.content).toEqual('Lorem Impsum 1');
  });

  it('throws not-found error if not exist', async () => {
    try {
      await getOne(0);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual('not-found');
    }
  });
});
