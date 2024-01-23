const Category = require("../../models/category");

module.exports = {
  categoryget: async (req, res) => {
    try {
      const userid = req.params.id;
      const getdata = await Category.findByPk(userid);
      res.json({ getdata });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "internal Server Error",
        error: error.message,
      });
    }
  },
  categoryallget: async (req, res) => {
    try {
      const colleges = await Category.findAll();
      res.json(colleges);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      res.status(500).send("An error occurred while fetching colleges");
    }
  },
  categoryupdate: async (req, res) => {
    try {
      const userId = req.params.id;
      var user = await Category.findByPk(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
          status: 404,
        });
      }
      var updateData = await Category.update(user, { where: { id: userId } });
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
  categorychangestatus: async (req, res) => {
    try {
      const { id, Status } = req.body;
      const newStatus = parseInt(Status);
      const categoryExists = await Category.findByPk(id);
      if (!categoryExists) {
        return res.status(404).send("id not found");
      }
      await Category.update({ Status: newStatus }, { where: { id: id } });
      res
        .status(200)
        .send(`Status updated successfully for category with ID ${id}`);
    } catch (error) {
      console.log("error========>", error);
      res.status(500).send("Internal server error");
    }
  },
  categoryDelete: async (req, res) => {
    try {
      const userId = req.params.id;
      const deledata = await Category.destroy({ where: { id: userId } });

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
  addsports: async (req, res) => {
  try {
    const newSport = await Category.create({ Sport: req.body.Sport });
    res.status(201).send(newSport);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
  },
};
