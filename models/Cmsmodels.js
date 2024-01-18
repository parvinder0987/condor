const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Cms = sequelize.define("Cms", {
    // id:{
    //     type:DataTypes.INTEGER
    // },
  Title: {
    type: DataTypes.STRING,
  },
  Content:{
    type: DataTypes.STRING,
  }
});

Cms.sync();

module.exports = Cms;
