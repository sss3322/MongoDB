const User =require("../Model/Userschema")

const CreateUser=async(req,res)=>
{
    const{Name,Email,Password}=req.body;
    const Userdetails =await User.create({
        Name,Email,Password
    })
    res.json(Userdetails)
}
module.exports=CreateUser