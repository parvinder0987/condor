const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection")

const user = sequelize.define("user", {
  Name: {
  type: DataTypes.STRING,
  allowNull: true,
},
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  password:{
    type:DataTypes.STRING
  },
role:{
  type:DataTypes.TINYINT,
}

});

user.sync();

module.exports = user;
