import { Router } from 'express';
import { postPost, getPosts } from '../controllers/post';
import {checkJwt} from '../middleware/session';


const router = Router()
  .get('/', checkJwt, getPosts)
  .post('/', checkJwt, postPost);
  // .get('/:id', getPost)
  // .put('/:id', updatePost)
  // .delete('/:id', deletePost);

export { router };
