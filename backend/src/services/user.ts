import User from '../models/user';
import { IUser } from '../interfaces/user.interface';

export const getAll = async () => {
  return await User.findAll();
};

export const getbyId = async (id: string) => {
  return await User.findByPk(id);
};

export const deleteById = async (id: string) => {
  return await User.destroy({ where: { id } });
};

export const update = async (user: IUser) => {
  const currentUser = await User.findByPk(user.id);

  if (currentUser) {
    currentUser.name = user.name ? user.name : currentUser.name;
    currentUser.email = user.email ? user.email : currentUser.email;
    currentUser.password = user.password ? user.password : currentUser.password;
    await currentUser.save();
  }
  return currentUser;
};
