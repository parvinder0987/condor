const User = require("../../models/usermodels");
const helper = require("../../middlewear/helper");

module.exports = {
  profilesetuup: async (req, res) => {
    try {
      if (req.files && req.files.image) {
        var image = req.files.image;

        if (image) {
          image = await helper.fileUpload(image);
        }
      }
      const userId = req.user.id;
      const { sportsPlay, College } = req.body;

      const updatedprofile = {
        sportsPlay,
        College,
      };
      const updatedata = await User.update(updatedprofile, {
        where: { id: userId },
      });
      return res.status(200).send({
        body: updatedata,
        updatedprofile,
        message: "profileupdated",
        success: true,
      });
    } catch (error) {
      console.log("error", error);
      return res.send({
        success: false,
        status: 401,
      });
    }
  },
  socialmedia: async (req, res) => {
    try {
      const userId = req.user.id;
      const { tiktok_Id, insta_Id, twitter_Id, bio } = req.body;

      const socialupdate = {
        tiktok_Id,
        insta_Id,
        twitter_Id,
        bio,
      };

      const updatedsocial = await User.update(socialupdate, {
        where: { id: userId },
      });
      return res.status(200).send({
        body: updatedsocial,
        socialupdate,
        updatedprofile,
        message: "profileupdated",
        success: true,
      });
    } catch (error) {
      console.log("error", error);
      return res.send({
        success: false,
        sattus: 500,
      });
    }
  },
  rolelistening: async (req, res) => {
    const userRole = req.body.role;
    try {
      const user = await User.findAll({ where: { role: userRole } });

      if (user) {
        res.status(200).json({ success: true, user });
      } else {
        res.status(406).json({
          success: false,
          message: "No users are available for this role.",
        });
      }
      //   res.json({user})
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  deleteuser: async (req, res) => {
    try {
      // console.log(req.body.id,'==--=-=-=--=-==--=-=-=-=')

      const userId = req.params.id;
      const deledata = await User.destroy({ where: { id: userId } });

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
  getdataofuser: async (req, res) => {
    try {
      const userID = req.params.id;
      const getdata = await User.findByPk(userID);
      res.send(getdata);
    } catch (error) {
      console.log("error===>", error);
      return res.send({ error });
    }
  },
  statuschange: async (req, res) => {
    try {
      const { id, Status } = req.body;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send("User not found");
      }
      const updatedUser = await user.update({ Status });

      res.status(200).send(updatedUser);
    } catch (error) {
      console.log("error========>", error);
      res.status(500).send("Internal server error");
    }
  },
  updateuserdetails:async(req,res)=>{
    try {
      const userId = req.params.id

      const updateuser = await User.update({
        
      })
    } catch (error) {
      console.log("internal error",error);
    }
  }
  //  this is backend code 
  // const changestatus = (id, currentStatus) => {
  //     axios.post('http://your-backend-url/statuschange', {
  //         id: id,
  //         status: currentStatus === 1 ? 0 : 1  // Toggle the status
  //     })
  //     .then(response => {
  //         // Handle successful response
  //         console.log("Status updated:", response.data);
  //         // Optionally, refresh the data to reflect the change
  //     })
  //     .catch(error => {
  //         // Handle error
  //         console.log("Error updating status:", error);
  //     });
  // };
  // /cthis is frontend code can u check backend code aftr arrange this frotend code     then i change status through frontend and backend is right but cna u create a frontend code  of this cde check 
};
