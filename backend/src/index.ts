import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import sequelize from './database/mysql';
import { logMiddleware } from './middleware/log';

async function main() {
  const PORT = process.env.PORT || 3001;
  const app = express();

  try {
    await sequelize.sync();
  } catch(e){
    console.error('Unable to connect to the database:', e);
    process.exit();
  }
  app
    .use(cors())
    .use(express.json())
    .use(logMiddleware)
    .use(router)
    .listen(PORT, ()=> console.log(`server listening in the port: ${PORT}`));
}

main();
