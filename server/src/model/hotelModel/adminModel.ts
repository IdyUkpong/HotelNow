import { Model, DataTypes } from "sequelize";
import db from "../../config/db.config";

interface Admin {
  adminId: string;
  name: string;
  password: string;
  email: string;

}

export class AdminInstance extends Model<Admin> {}

AdminInstance.init(
  {
    adminId: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: { type: DataTypes.STRING, 
      allowNull: false },
      
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Admin",
  }
);
