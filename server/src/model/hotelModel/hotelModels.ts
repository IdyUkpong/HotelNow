import { Model, DataTypes } from "sequelize";
import db from "../../config/db.config";

interface Hotel {
  hotelId: string;
  name: string;
  location: string;
  description: string;
  price: string;
  image: any;
  adminId: string;
}

export class HotelInstance extends Model<Hotel> {}

HotelInstance.init(
  {
    hotelId: {
      type: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: { type: DataTypes.STRING, 
      allowNull: false },
    adminId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Hotel",
  }
);
