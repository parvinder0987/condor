const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

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
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.TINYINT,
  },
  location: {
    type: DataTypes.STRING,
  },
  Phonenumber: {
    type: DataTypes.STRING,
  },
  otp: {
    type: DataTypes.STRING,
  },
  otp_verify: {
    type: DataTypes.STRING,
  },
  Status:{
    type:DataTypes.STRING
  },
  sportsPlay: {
    type: DataTypes.STRING,
  },
  College: {
    type: DataTypes.STRING,
  },
  tiktok_Id: {
    type: DataTypes.STRING,
  },
  insta_Id: {
    type: DataTypes.STRING,
  },
  twitter_Id: { type: DataTypes.STRING },
  bio: {
    type: DataTypes.TEXT,
  },
  Price: {
    type: DataTypes.STRING,
  },
  ProfileImage: {
    type: DataTypes.STRING,
  },
  Notification: {
    type: DataTypes.STRING,
  },
});

user.sync();

module.exports = user;
