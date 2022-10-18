const User = require('../../Models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    try {
          const user = await User.findOne({ email: req.body.email })
          if (user !=null && ( await bcrypt.compare(req.body.password, user.passwordHashed))) { 
  
             const data = {
              useremail : user.email,
            userId : user._id
             }
                  var token = jwt.sign(data, 'secret', { expiresIn:60*60*60});
  
                   res.send({message:'connecté avec succès',token:token})
  
  
              }  
          else {
              res.send(' vérifier votre email et votre mot de passe')
          }
      }
      catch(err)
      {
          res.status(500).send('erreur serveur')
      }
      }