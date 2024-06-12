const mongoose = require("mongoose")
const Userscheme = mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,minlength:6,required:true}
});

const User= mongoose.model("User",Userscheme)
module.exports = User;