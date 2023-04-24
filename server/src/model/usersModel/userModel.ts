import { BelongsToMany, DataTypes, Model } from "sequelize";
import db from "../../config/db.config";
import { BookingInstance } from "./bookingModel";

export interface UserAttributes {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  userId: string;
}

export class UserInstance extends Model<UserAttributes> {}

UserInstance.init(
  {
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "user",
  }
);

UserInstance.hasMany(BookingInstance,{foreignKey:"userId", as: "booking"})
BookingInstance.belongsTo(UserInstance,{foreignKey:"userId", as: "user"})