const User = require("../../models/usermodels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Validator } = require("node-input-validator");
const helper = require("../../middlewear/helper");
// const user = require("../../models/usermodels");

module.exports = {
  signup: async (req, res) => {
    try {
      const data = await User.create({
        Name: req.body.Name,
        Email: req.body.Email,
        password: req.body.password,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("internal error");
    }
  },
login: async (req, res) => {
    try {
      const { Email, password } = req.body;
      console.log(req.body);
      const validation = new Validator(req.body, {
        Email: "required|email",
        password: "required",
      });
      const errors = await helper.checkValidation(validation);
      if (errors) {
        return res.status(400).json({ message: errors });
      }
      const user = await User.findOne({
        where: { Email: Email ,role:0},
        raw: true,
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
 
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ id: user.id }, "parvidner@123");
      res.json({ token, user });
    } catch (error) {
      console.log("Error during login:", error.message);
      res.status(500).json({ message: error.message });
    }
  },
Changepasword: async (req, res) => {
    try {
      const userId = req.user.id;
      const { oldpassword, Newpassword, confrimpassword } = req.body;
      const v = new Validator(req.body, {
        oldpassword: "required",
        Newpassword: "required|min:6",
        confrimpassword: "required|min:6",
      });
      if (Newpassword !== confrimpassword) {
        return helper.failed(res, "confirm password not match");
      }
      let errorsResponse = await helper.checkValidation(v);

      if (errorsResponse) {
        return helper.failed(res, errorsResponse);
      }

      const passwordchange = await User.findByPk(userId);
      if (!passwordchange) {
        return helper.failed(res, "user not found");
      }

      const isoldpassword = await bcrypt.compare(
        oldpassword,
        passwordchange.password
      );
      if (!isoldpassword) {
        return helper.failed(res, "oldpassword is incorrect");
      }
      const hashedpassword = await bcrypt.hash(Newpassword, 10);
      const update = await User.update(
        {
          password: hashedpassword,
        },
        {
          where: { id: userId },
        }
      );
      return res.json({
        data: update,
        success: true,
        message: "Password changed successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(401).send("internla error");
    }
  },
getprofile: async (req, res) => {
    const userId = req.user.id;
    try {
      const indata = await User.findByPk(userId);

      if (!indata) {
        return helper.failed(res, "id not found");
      }

      return res.json({ body: indata, success: true, status: 200 });
    } catch (error) {
      console.log("error==", error);
      return res.status(402).send("internal error");
    }
  },
updatedetails: async (req, res) => {
    try {
      const userId = req.user.id;
      const { name, email } = req.body;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
          status: 404,
        });
      }
      // console.log(userId,"==========")
      // console.log(user,"============");return
      const updata = await User.update(req.body, { where: { id: user.id } });

      if (updata[0] > 0) {
        return res.json({
          body: user,
          success: true,
          message: "User updated successfully",
          status: 200,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "No changes made to the user",
          status: 404,
        });
      }
    } catch (error) {
      console.error("error=====", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        status: 500,
      });
    }
  },



  
};
