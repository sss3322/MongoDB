
const bcrypt=require('bcrypt')
const User2 = require('../Model/Userschema2')
const createUser=async (req,res)=>{
    const{username,email,password}=req.body
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password,salt)
    const Userdetails=await User2.create({
        username,email,password:hashedpassword
    })
    res.json(Userdetails)
}
module.exports=createUser