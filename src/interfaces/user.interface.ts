import {Auth} from './auth.interface';

export interface IUser extends Auth{
   id: number
   name: string
}

export type UserWithoutID = Omit<IUser, 'id'>
