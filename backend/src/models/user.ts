import sequelize from '../database/mysql';
import { DataTypes, Model } from 'sequelize';
import Post from './post';
import { IUser } from '../interfaces/user.interface';

class User extends Model implements IUser {
  declare id: number;
  declare name: string;
  declare password: string;
  declare email: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize }
);

User.hasMany(Post, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id',
});

export default User;
