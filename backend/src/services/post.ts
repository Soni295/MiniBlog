import Post from '../models/post';
import { IPost } from '../interfaces/post.interface';

export const getAll = async () => {
  return await Post.findAll();
};

export const createPost = async (post: IPost) => {
  return await Post.create({
    body: post.body,
    title: post.title,
    userId: post.userId,
  });
};
