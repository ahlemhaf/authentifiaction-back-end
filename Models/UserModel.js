const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const UserSchema=new Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  passwordHashed:{type:String ,required: true},
  address:{type:String,required:true},
  genre:{type:String,required:true},
  role:{type:String , default:'client'},
},
{
    timestamps: true, versionKey: false
  },
)

module.exports = mongoose.model('user',UserSchema)