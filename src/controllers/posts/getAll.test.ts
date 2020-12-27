import getAllPosts from './getAll';

describe('getAll', () => {
  it('gets all posts', async () => {
    const allPosts = await getAllPosts();

    expect(allPosts).toBeDefined();
    expect(allPosts).toBeInstanceOf(Array);

    expect(allPosts).toHaveLength(5);

    expect(allPosts[0]).toHaveProperty('id');
    expect(allPosts[0].id).toEqual(1);

    expect(allPosts[0]).toHaveProperty('title');
    expect(allPosts[0].title).toEqual('What is Lorem Ipsum?');

    expect(allPosts[0]).toHaveProperty('content');
    expect(allPosts[0].content.length).toEqual(572);

    expect(allPosts[0]).toHaveProperty('numOfComments');
    expect(allPosts[0].numOfComments).toEqual(5);
  });
});
