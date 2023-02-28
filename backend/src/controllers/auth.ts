import { Request, Response } from 'express';
import {loginUser, registerNewUser} from '../services/auth';
import {handlerHttp} from '../utils/error.handler';

const ERRORS = {
  REGISTER_USER: 'ERROR_REGISTER_USER',
  LOGGING_USER: 'ERROR_LOGGING_USER',
};

export const register = async(req: Request, res: Response) => {
  const {email, password, name} = req.body;
  try {
    const user = await registerNewUser({email,password, name});
    res.json(user);
  } catch(e){
    handlerHttp(res, ERRORS.REGISTER_USER, e);
  }
};

export const login = async(req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser({email, password});
    if (user == 'THE EMAIL OR PASSWORD IS INCORRECT') {
      return res.status(403).send(user);
    }
    res.json(user);
  } catch(e){
    handlerHttp(res, ERRORS.REGISTER_USER, e);
  }
};
