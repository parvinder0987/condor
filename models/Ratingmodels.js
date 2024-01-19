const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Rating = sequelize.define("Rating", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rating_by: {
    type: DataTypes.INTEGER,
  },
  rating_to: {
    type: DataTypes.INTEGER,
  },
  rating: {
    type: DataTypes.DOUBLE,
  },
});

Rating.sync();

module.exports = Rating;
