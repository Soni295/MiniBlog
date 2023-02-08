import { Router } from 'express';
import { getUsers, getUser, deleteUser, updateUser } from '../controllers/user';

const router = Router()
  .get('/:id', getUser)
  .get('/', getUsers)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser);

export { router };
