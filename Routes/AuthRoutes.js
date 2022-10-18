const express=require('express')
const  passport =require('passport');
const { login } = require('../Controllers/Account/Login');
const { register } = require('../Controllers/Account/Register')
const router=express.Router()

router.post('/register',register)
router.post('/login',login)



router.get('/profile',
passport.authenticate('bearer', { session: false }),
function(req, res) {
  res.send(req.user);
});


module.exports=router