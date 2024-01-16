const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const College = sequelize.define("College", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  college: {
    type: DataTypes.STRING,
    allowNull: false, // instead of required: true
  },
  status: {
    type: DataTypes.STRING,
  },
});

College.sync();

module.exports = College;
