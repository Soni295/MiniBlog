import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';
import { Auth } from './auth.interface';

export interface IUser extends Auth{
   id: number
   name: string
}

export type UserWithoutID = Omit<IUser, 'id'>


export interface JwtPayloadWithId extends JwtPayload{
  id: number
}

export interface RequestExt extends Request {
  user?: JwtPayloadWithId
}
