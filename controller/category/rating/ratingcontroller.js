const Rating = require("../../../models/Ratingmodels")
const User = require("../../../models/usermodels")

module.exports={
 submit_rating:async(req,res)=>{
    try {
   let data = await Rating.create({
     rating_to: req.body.rating_to,
     rating_by: req.body.rating_by,
     rating:req.body.rating
   });

        res.status(200).send({
          success: "true",
          status:200,
          message:'rating Submit Successfully',
          body: data,
        });
    } catch (error) {
        console.log(error);
    }
 },
 rating_alldata:async(req,res)=>{
    try {
       const ratings = await Rating.findAll();
      res.json(ratings);
    } catch (error) {
      console.error("Error fetching Rating:", error);
      res.status(500).send("An error occurred while fetching Rating");
 }

}
}