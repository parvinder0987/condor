var express = require('express');
const usercontroller = require('../controller/authapi/usercontroller');
const { authenticateJWT } = require('../middlewear/helper');
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
router.delete("/deleteuser",usercontroller.deleteuser)

module.exports = router;
