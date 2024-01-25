const Rating = require("../../../models/Ratingmodels");
const User = require("../../../models/usermodels");

module.exports = {
  submit_rating: async (req, res) => {
    try {
      let data = await Rating.create({
        rating_to: req.body.rating_to,
        rating_by: req.body.rating_by,
        rating: req.body.rating,
      });

      res.status(200).send({
        success: "true",
        status: 200,
        message: "rating Submit Successfully",
        body: data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  rating_alldata: async (req, res) => {
    try {
      const ratings = await Rating.findAll();
 
      res.json(ratings);
    } catch (error) {
      console.error("Error fetching Rating:", error);
      res.status(500).send("An error occurred while fetching Rating");
    }
  },
  delete_rating: async (req, res) => {
    try {
      const userId = req.params.id;
      const deledata = await Rating.destroy({ where: { id: userId } });

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
  rating_getdata: async (req, res) => {
    try {
      const userid = req.params.id;
      const getdata = await Rating.findByPk(userid);
      res.json({ getdata });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "internal Server Error",
        error: error.message,
      });
    }
  },
  rating_update: async (req, res) => {
    try {
      const userId = req.params.id;
      const updateData = req.body; 

      const user = await Rating.findByPk(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
          status: 404,
        });
      }
      await Rating.update(updateData, { where: { id: userId } });

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
