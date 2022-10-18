const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;
const User=require('../Models/UserModel')
const jwt = require("jsonwebtoken");

passport.use(new BearerStrategy((token, done) => {
    const decodedData = jwt.verify(token, 'secret');
    console.log(decodedData);
     User.findOne({ _id: decodedData.UserId }, function (err, user) {
       if (err) {return done(err); }
       if (!user) {return done(null, false); }
       return done(null, user, { scope: 'all' });
     });
   }
 ))
 ;