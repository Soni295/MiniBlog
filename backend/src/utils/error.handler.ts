import { Response } from 'express';

export const handlerHttp = (res:Response, error: string, errorRaw?: any) => {
  res.status(500).send({error, desc: errorRaw});
};
