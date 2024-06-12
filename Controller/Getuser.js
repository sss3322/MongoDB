const { model } = require("mongoose");
const User = require("../Model/Userschema");

const GetUser = async (req, res) => {
    const User1 = await User.find();
    res.json(User1);
};

module.exports = GetUser;
