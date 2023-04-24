import { DataTypes, Model } from "sequelize";
import db from "../../config/db.config";
export interface BookingAttributes {
    userId: string;
    numberOfGuest: number;
    checkIn: string;
    checkOut: string;
    bookingId:string;
    location:string
  }
  
  export class BookingInstance extends Model<BookingAttributes> {}
  
  BookingInstance.init(
    {
      userId: {
        type: DataTypes.UUIDV4,
        allowNull: false,
       
      },
      numberOfGuest: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      checkIn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      checkOut: {
        type: DataTypes.STRING,
        allowNull: false,
    
      },
      bookingId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      
     location: {
        type: DataTypes.STRING,
        allowNull: false,
    
      }
    },
    {
      sequelize: db,
      tableName: "booking",
    }
  );