const express=require('express')
const  passport =require('passport');
const { register, login, forgetpassword, resetPassword } = require('../Controllers/Account/Auth.Controller');

const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/forgetPassword',forgetpassword)
router.post('/resetPassword/:token',resetPassword)

router.get('/profile',
passport.authenticate('bearer', { session: false }),
function(req, res) {
  res.send(req.user);
});


module.exports=router