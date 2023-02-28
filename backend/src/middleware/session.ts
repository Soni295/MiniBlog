import {NextFunction, Response} from 'express';
import { JwtPayloadWithId, RequestExt } from '../interfaces/user.interface';
import {verifyToken} from '../utils/jwt.handler';


export const checkJwt = async(req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(' ').pop();

    if (!jwt){
      res.status(401).send('SESSION NO VALID');
      return;
    }

    const isOk = verifyToken(jwt);

    if (!isOk){
      res.status(401).send('SESSION NO VALID');
      return;
    }

    req.user = isOk as JwtPayloadWithId;
    next();
  } catch(e){
    res.status(400).send('SESSION NO VALID');
  }
};
