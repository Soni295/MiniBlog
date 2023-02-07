import { Request, Response, Router } from 'express';

const router = Router();

router.get('', (_: Request, res: Response) => {
  res.send({data: 'post'});
});

export { router };
