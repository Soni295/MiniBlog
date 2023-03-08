import 'dotenv/config';
import { config } from '../config/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(config.db, config.dbUser, config.dbPass, {
  host: 'localhost',
  dialect: 'mysql',
  //    logging: console.log
});

export default sequelize;
