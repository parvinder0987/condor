const college = require("../../models/collegemodels");
const userModal = require('../../models/usermodels')
module.exports = {
  getcollege: async (req, res) => {
    try {
      const userid = req.params.id;
      const getdata = await college.findByPk(userid);
      res.json({ getdata });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "internal Server Error",
        error: error.message,
      });
    }
  },
  getallcollege: async (req, res) => {
    try {
      const colleges = await college.findAll();
      res.json(colleges);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      res.status(500).send("An error occurred while fetching colleges");
    }
  },
  statuschange: async (req, res) => {
    try {
      const { id, Status } = req.body;
console.log(req.body,'=-=-=-=-=-=-=-=-=-=-')
      const collegeExists = await college.findByPk(id);
      if (!collegeExists) {
        return res.status(404).send("College not found");
      }
      await college.update({ status: Status }, { where: { id: id } });
      res
        .status(200)
        .send(`Status updated successfully for college with ID ${id}`);
    } catch (error) {
      console.log("error========>", error);
      res.status(500).send("Internal server error");
    }
  },

  deleteuser: async (req, res) => {
    try {
      const userId = req.params.id;
      const deledata = await college.destroy({ where: { id: userId } });

      if (deledata) {
        res.status(200).send("data will be deleted");
      } else {
        res.status(500).send("internal error");
      }
    } catch (error) {
      console.log(error, "error=>");
      return res.send({
        success: false,
        status: 500,
        err: error.message,
      });
    }
  },
  viewdata: async (req, res) => {
    try {
      const userID = req.params.id;
      const getdata = await college.findByPk(userID);
      res.send(getdata);
    } catch (error) {
      console.log("error===>", error);
      return res.send({ error });
    }
  },
  updatecollegedata: async (req, res) => {
    try {
      let data;
      let Model = userModal;
      console.log(req.body);

      switch (req.body.page) {
        case "college":
          data = { college: req.body.college, status: req.body.status };
           Model = college;
          break;
        case "corporation":
          data = {
            Name: req.body.Name,
            Email: req.body.Email,
            location: req.body.location,
            Phonenumber: req.body.Phonenumber,
            bio: req.body.bio,
            Price: req.body.Price,
            tiktok_Id: req.body.tiktok_Id,
            insta_Id: req.body.insta_Id,
            twitter_Id: req.body.twitter_Id,
          };
          break;
        case "athlete":
          data = {
            Name: req.body.Name,
            Email: req.body.Email,
            location: req.bod.location,
            Phonenumber: req.body.Phonenumber,
            bio: req.body.bio,
            Price: req.body.Price,
            tiktok_Id: req.body.tiktok_Id,
            insta_Id: req.body.insta_Id,
            twitter_Id: req.body.twitter_Id,
          };
          break;
        default:
          res.json("case invalid");
      }
      const userId = req.params.id;
      var user = await Model.findByPk(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
          status: 404,
        });
      }
      var updateData = await Model.update(data, { where: { id: userId } });
      return res.send({ message: "Data updated" });
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
