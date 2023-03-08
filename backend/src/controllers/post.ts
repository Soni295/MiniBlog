import { Response } from 'express';
import { RequestExt } from '../interfaces/user.interface';
import { createPost, getAll } from '../services/post';
import { handlerHttp } from '../utils/error.handler';

const ERRORS = {
  GET_POSTS: 'ERROR_GET_POSTS',
};

export const getPosts = async (req: RequestExt, res: Response) => {
  try {
    const posts = await getAll();
    res.json(posts);
  } catch (e) {
    handlerHttp(res, ERRORS.GET_POSTS);
  }
};

export const postPost = async (req: RequestExt, res: Response) => {
  try {
    const { body, title } = req.body;

    const post = await createPost({
      body,
      title,
      userId: req?.user?.id || 0,
    });
    res.status(204).json(post);
  } catch (e) {
    handlerHttp(res, ERRORS.GET_POSTS);
  }
};
