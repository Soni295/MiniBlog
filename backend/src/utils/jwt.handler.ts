import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'example';

export const generateToken = async (id: number) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '2h',
  });
  return jwt;
};

export const verifyToken = (jwt: string) => {
  const isVerificated = verify(jwt, JWT_SECRET);
  return isVerificated;
};
