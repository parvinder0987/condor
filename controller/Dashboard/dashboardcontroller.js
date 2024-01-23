const User = require("../../models/usermodels")
const Category = require("../../models/category")
const college = require("../../models/collegemodels")
const Rating = require("../../models/Ratingmodels")

module.exports = {
    Dashboard:async(req,res)=>{
         try {
        

           const athleteCount = await User.count({ where: { role: 1 } });
           const corporationCount = await User.count({
             where: { role: 2 },
           });
           const collegeCount = await college.count();
           const sportCount = await Category.count();
           const ratingCount = await Rating.count();

           res.status(200).send({
             athleteconut: athleteCount,
             corporationconut: corporationCount,
             college: collegeCount,

             sport: sportCount,
             rating: ratingCount,
             success: true,
             message: "Count get Successfully",
           });
         } catch (error) {
           console.log("Error:", error);
           res
             .status(500)
             .send({ success: false, message: "Internal Server Error" });
         }
    }
}