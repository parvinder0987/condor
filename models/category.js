const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");


const category = sequelize.define("category", {
  Sport: {
    type: DataTypes.STRING,
  },
  Status: {
      type: DataTypes.INTEGER,
  },
});

category.sync();

module.exports = category;