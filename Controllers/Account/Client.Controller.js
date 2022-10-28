const User=require('../../Models/UserModel')

exports.getuserbyid=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'erreur serveur'})
    }
}
    exports.updateuser=async(req,res)=>{
        try {
            await User.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).send({message:'user updated'})
        } catch (error) {
            console.log(error);
            res.status(500).send({message:"erreur serveur"})  
        }
    }
exports.deleteuser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send({message:'user deleted'})
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"erreur serveur"})
      
    }
}



