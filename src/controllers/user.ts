import { Request, Response } from 'express';
import {IUser} from '../interfaces/user.interface';
import {deleteById, getAll, getbyId, update} from '../services/user';
import {handlerHttp} from '../utils/error.handler';

const ERRORS = {
  GET_USER: 'ERROR_GET_USER',
  GET_USERS: 'ERROR_GET_USERS',
  UPDATE_USER: 'ERROR_UPDATE_USER',
  POST_USER: 'ERROR_POST_USER',
  DELETE_USER: 'ERROR_DELETE_USER'
};

export const getUser = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getbyId(id);

    const data: IUser | string = user ? user :'USER_NOT_FOUND';

    res.json(data);
  } catch(e){ handlerHttp(res, ERRORS.GET_USER); }
};

export const getUsers = async(_: Request, res: Response) => {
  try {
    const AllUsers = await getAll();
    res.json(AllUsers);
  } catch(e){ handlerHttp(res, ERRORS.GET_USERS); }
};

export const updateUser = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const currentUser = await update({name, email, password, id: Number(id)});

    res.json(currentUser);
  } catch(e){ handlerHttp(res, ERRORS.UPDATE_USER); }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    res.sendStatus(204);
  } catch(e){ handlerHttp(res, ERRORS.DELETE_USER); }
};
