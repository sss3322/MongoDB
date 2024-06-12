const User = require("../Model/Userschema")

const getDetails= async (req,res)=>{
    const id =req.params.demo
    const Userid=await User.findById(id)

    res.json(Userid);
}

module.exports=getDetails