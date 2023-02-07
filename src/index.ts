import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import sequelize from './database/mysql';

async function main() {
  const PORT = process.env.PORT || 3000;
  const app = express();

  try {
    await sequelize.sync();
  } catch(e){
    console.error('Unable to connect to the database:', e);
    process.exit();
  }

  app
    .use(express.json())
    .use(cors())
    .use(router)
    .listen(PORT, ()=> console.log(`server listening in the port: ${PORT}`));
}

main();
