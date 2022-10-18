const User = require('../../Models/UserModel');
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');
const path=require('path')


exports.register = async (req, res) => {
  try {
    const trouve = await User.findOne({ email: req.body.email })

    if (trouve !== null) {
      res.send('email déja existe !');
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      req.body.passwordHashed = bcrypt.hashSync(req.body.password, salt);
      await User.create(req.body)
      let transporter = nodemailer.createTransport({
        host:process.env.host ,
        port: process.env.port,
        secure: false,
        auth: {
          user: process.env.email,
          pass: process.env.password,
        },
      });

      let info = await transporter.sendMail({
        from: `${process.env.email}`,
        to: `${req.body.email}`,
        subject: "Inscription",
        attachments:[
          {
          
            path:path.resolve('./welcome.png')
          }
        ],

        html: `<h1>Merci de nous avoir rejoint!</h1> 
       <p> Bonjour  ${req.body.genre} ${req.body.lastName},vous etes officiellement un membre dans notre plateforme E-learning,
        nous sommes fiers de vous compter parmi nous ,Merci encore pour votre confiance !</p>

         Vous pouvez accéder dés mainteneant à la plate-forme via vos coordonnées :<br><br>

         votre email est: ${req.body.email}<br>
         votre mot de passe est :${req.body.password}<br>
         N'hésitez pas à me contacter en cas de besoin.<br>
         Cordialement .
        
        
        `
      })
        .then(function (user) {

          res.send(user)
        })
    }
  } catch (error) {
    res.send('erreur serveur')
  }

}
