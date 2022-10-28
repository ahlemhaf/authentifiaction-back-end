const express =require('express')
const { getuserbyid, updateuser, deleteuser } = require('../Controllers/Account/Client.Controller')
const router=express.Router()



router.get('/user/:id',getuserbyid)
router.put('/user/:id',updateuser)
router.delete('/user/:id',deleteuser)


module.exports=router