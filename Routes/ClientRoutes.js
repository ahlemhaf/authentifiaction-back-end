const express =require('express')
const { getuserbyid, updateuser, deleteuser, adduser, getuser } = require('../Controllers/Account/Client.Controller')
const router=express.Router()



router.post('/user',adduser)
router.get('/user',getuser)
router.get('/user/:id',getuserbyid)
router.put('/user/:id',updateuser)
router.delete('/user/:id',deleteuser)


module.exports=router