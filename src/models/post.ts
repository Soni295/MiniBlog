import sequelize from "../database/mysql";
import {DataTypes, Model} from "sequelize";

class Post extends Model {
  declare id: number
  declare userId: number
  declare title: string
  declare body: string
}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type:DataTypes.TEXT,
    allowNull: false
  }
}, {sequelize})

/*
(async ()=> {
  await sequelize.sync()
})();
*/

export default Post
