var express = require('express');
const admincontroller = require('../controller/authapi/admincontroller');
const { authenticateJWT } = require('../middlewear/helper');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',admincontroller.login)
router.post("/changepassword",authenticateJWT,admincontroller.Changepasword)
router.get("/adminprofile",authenticateJWT,admincontroller.getprofile)
router.post("/update",authenticateJWT,admincontroller.updatedetails)


module.exports = router;
