
const Cms = require("../../models/Cmsmodels")


module.exports = {
  termsget: async (req, res) => {
    try {
      const Findcms = await Cms.findOne({where:{type:1}});
      if (!Findcms) {
        return res.status(400).send("not found");
      }
      return res.send({
        data: Findcms,
        success: true,
      });
    } catch (error) {
      console.log("internal error", error);
      return res.send({
        message: "please check the code",
      });
    }
  },
  termsUpdate: async (req, res) => {
     try {

       const updateData = req.body;

       const findCms = await Cms.findOne({ where: { type: 1 } });
       if (!findCms) {
         return res
           .status(404)
           .send("CMS content with the specified type not found");
       }
       const updatedCms = await findCms.update(updateData);
       return res.send({
         data: updatedCms,
         success: true,
         message: "CMS content updated successfully",
       });
     } catch (error) {
       console.log("Internal error", error);
       return res.status(500).send({
         message: "Error updating CMS content",
       });
     }
  },
  aboutget:async(req,res)=>{
     try {
       const userId = req.params.id;

       const Findcms = await Cms.findOne({ where: { type: 2 } });
       if (!Findcms) {
         return res.status(400).send("not found");
       }

       return res.send({
         data: Findcms,
         success: true,
       });
     } catch (error) {
       console.log("internal error", error);
       return res.send({
         message: "please check the code",
       });
     }
  },
  aboutupdate:async(req,res)=>{
  try {
    const updateData = req.body;

    const findCms = await Cms.findOne({ where: { type: 2 } });
    if (!findCms) {
      return res
        .status(404)
        .send("CMS content with the specified type not found");
    }
    const updatedCms = await findCms.update(updateData);
    return res.send({
      data: updatedCms,
      success: true,
      message: "CMS content updated successfully",
    });
  } catch (error) {
    console.log("Internal error", error);
    return res.status(500).send({
      message: "Error updating CMS content",
    });
  }
  },
  privacyget:async(req,res)=>{
     try {
       const userId = req.params.id;

       const Findcms = await Cms.findOne({ where: { type: 3 } });
       if (!Findcms) {
         return res.status(400).send("not found");
       }

       return res.send({
         data: Findcms,
         success: true,
       });
     } catch (error) {
       console.log("internal error", error);
       return res.send({
         message: "please check the code",
       });
     }
  },
  privacyupdate:async(req,res)=>{
    try {
      const updateData = req.body;

      const findCms = await Cms.findOne({ where: { type: 3 } });
      if (!findCms) {
        return res
          .status(404)
          .send("CMS content with the specified type not found");
      }
      const updatedCms = await findCms.update(updateData);
      return res.send({
        data: updatedCms,
        success: true,
        message: "CMS content updated successfully",
      });
    } catch (error) {
      console.log("Internal error", error);
      return res.status(500).send({
        message: "Error updating CMS content",
      });
    }
  }
};