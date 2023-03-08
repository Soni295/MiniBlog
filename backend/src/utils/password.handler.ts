import { hash, compare } from 'bcryptjs';

export const encrypt = async (password: string): Promise<string> => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

export const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};
