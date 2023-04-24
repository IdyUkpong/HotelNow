import { Sequelize } from "sequelize";

const db = new Sequelize("app", "", "", {
  storage: "./Database.sqlite",
  dialect: "sqlite",
  logging: false,
});

export default db;
