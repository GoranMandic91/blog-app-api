import { Comment } from './comment';

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostInfo extends Post {
  numOfComments: number;
}

export interface PostWithComments extends Post {
  comments: Comment[];
}
