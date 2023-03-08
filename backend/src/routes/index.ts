import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = __dirname;

const router = Router();

const cleanFileName = (fileName: string) => fileName.split('.')[0];

readdirSync(PATH_ROUTER).forEach((fileName) => {
  const file = cleanFileName(fileName);

  if (file === 'index') return;

  import(`./${file}`).then((moduleRoute) => {
    router.use(`/${file}`, moduleRoute.router);
  });
});

export { router };
