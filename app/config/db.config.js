
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
 
  database: "database",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
  
   

    pool: {
   
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require("../model/customer.model.js")(sequelize, Sequelize);

module.exports = db;
