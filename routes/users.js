var express = require('express');
const usercontroller = require('../controller/authapi/usercontroller');
const { authenticateJWT } = require('../middlewear/helper');
const collegecontroller = require('../controller/category/collegecontroller');
const Cmscontroller = require('../controller/Cms/Cmscontroller');
const Cms = require('../models/Cmsmodels');
const sportscontroller = require('../controller/category/sportscontroller');
const ratingcontroller = require('../controller/category/rating/ratingcontroller');
const dashboardcontroller = require('../controller/Dashboard/dashboardcontroller');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//
router.post("/rolelistening",usercontroller.rolelistening)
router.post("/profilesetup",authenticateJWT,usercontroller.profilesetuup)
router.post("/prfilesetup@",authenticateJWT,usercontroller.socialmedia)
//
router.delete("/deleteuser/:id",usercontroller.deleteuser)
router.get("/viewdata/:id",usercontroller.getdataofuser)

router.post("/statuschange",usercontroller.statuschange)

//........college..........

router.get("/collegedata/:id",collegecontroller.getcollege)
router.get("/colleges",collegecontroller.getallcollege)
router.post("/chnagestatus",collegecontroller.statuschange)
router.get("/collegeview/:id",collegecontroller.viewdata)
router.post("/updated/:id",collegecontroller.updatecollegedata)
router.delete("/deletedata/:id",collegecontroller.deleteuser)


//..cms
router.get("/Cms", Cmscontroller.termsget);
router.post("/updatecms", Cmscontroller.termsUpdate);
router.get("/aboutus",Cmscontroller.aboutget)
router.post("/aboutupdated",Cmscontroller.aboutupdate)
router.get("/privacy",Cmscontroller.privacyget)
router.post("/privacyupdated",Cmscontroller.privacyupdate)

//sports//////
router.get("/getdata/:id",sportscontroller.categoryget)
router.get("/getallcategory",sportscontroller.categoryallget)
router.post("/statusupdate",sportscontroller.categorychangestatus)
router.delete("/categorydelete/:id",sportscontroller.categoryDelete)
router.post("/addsports",sportscontroller.addsports)


// ratings
router.post("/submit_rating", ratingcontroller.submit_rating);
router.get("/ratingalldata", ratingcontroller.rating_alldata);
router.delete("/deleterating/:id",ratingcontroller.delete_rating)
router.get("/rating_get/:id",ratingcontroller.rating_getdata)
router.post("/rating_update/:id",ratingcontroller.rating_update)

//  dashboard//
router.get("/dashboardgetdata",dashboardcontroller.Dashboard)



module.exports = router;
