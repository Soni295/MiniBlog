import {Auth} from '../interfaces/auth.interface';
import {UserWithoutID} from '../interfaces/user.interface';
import User from '../models/user';
import {encrypt, verified} from '../utils/password.handler';

export const registerNewUser = async(authUser: UserWithoutID) => {

  const userExist = await User.findOne({
    where: {email: authUser.email}
  });

  if(userExist) return 'THIS EMAIL IS ALREADY REGISTERED';

  const encryptPassword = await encrypt(authUser.password);

  const newUser = await User.create({
    ...authUser, password: encryptPassword
  });
  return newUser;
};

export const loginUser = async(authUser: Auth) => {
  const userExist = await User.findOne({
    where: {email: authUser.email}
  });

  if(!userExist) return 'THE EMAIL OR PASSWORD IS INCORRECT';

  const isCorrectPass = await verified(authUser.password, userExist.password);

  if(!isCorrectPass) return 'THE EMAIL OR PASSWORD IS INCORRECT';
  return userExist;
};
