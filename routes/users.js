var express = require('express');
const usercontroller = require('../controller/authapi/usercontroller');
const { authenticateJWT } = require('../middlewear/helper');
const collegecontroller = require('../controller/category/collegecontroller');
var router = express.Router();

/* GET users listing. */
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
// router.post("/dataupdated/:id",usercontroller.updateuserdetails)


//........college..........

router.get("/collegedata/:id",collegecontroller.getcollege)
router.get("/colleges",collegecontroller.getallcollege)


router.post("/chnagestatus",collegecontroller.statuschange)


router.get("/collegeview/:id",collegecontroller.viewdata)
router.post("/updated/:id",collegecontroller.updatecollegedata)
module.exports = router;
