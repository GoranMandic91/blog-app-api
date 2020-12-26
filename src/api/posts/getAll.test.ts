import setupRequestTest from '../../__test__/setup';
import controllers from '../../controllers';

jest.mock('../../controllers');
const getAllPostsMock = controllers.posts.getAll as jest.Mock;

const { request } = setupRequestTest();

describe('GET /posts', () => {
  const postsMock = [{
    id: 1,
    title: 'Blog Post Title 1',
    content: 'Lorem Impsum 1',
    numOfComments: 5,
  }, {
    id: 2,
    title: 'Blog Post Title 2',
    content: 'Lorem Impsum 2',
    numOfComments: 1,
  }];

  it('returns all available posts', async () => {
    getAllPostsMock.mockResolvedValueOnce(postsMock);

    await request()
      .get('/posts')
      .expect(200, { data: postsMock });
  });
});
