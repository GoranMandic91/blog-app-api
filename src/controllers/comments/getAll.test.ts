import getAll from './getAll';

describe('getAll', () => {
  it('gets all comments for specific post', async () => {
    const allComments = await getAll(1);

    expect(allComments).toBeDefined();
    expect(allComments).toBeInstanceOf(Array);

    expect(allComments).toHaveLength(5);

    expect(allComments[0]).toHaveProperty('id');
    expect(allComments[0].id).toEqual(1);

    expect(allComments[0]).toHaveProperty('name');
    expect(allComments[0].name).toEqual('Blog Post name 1');

    expect(allComments[0]).toHaveProperty('text');
    expect(allComments[0].text).toEqual('Comment Lorem Impsum 1');
  });

  it('returns empty array if there is no comments', async () => {
    const allComments = await getAll(4);

    expect(allComments).toBeDefined();
    expect(allComments).toBeInstanceOf(Array);

    expect(allComments).toHaveLength(0);
  });
});
