const jwt = require('jsonwebtoken');
const User2 = require('../Model/Userschema2');

const CreateUser1 = async (req, res) => {
    const { username, email, password } = req.body;
    const alreadyExist = await User2.findOne({ email: email });

    if (alreadyExist) {
        return res.json("Already Exist");
    } 

    const user = await User2.create({
        username,
        email,
        password
    });

    const token = tokengenerate(user._id);

    res.json({
        Id: user._id,
        Name: user.username,
        Email: user.email,
        Password: user.password,
        Token: token
    });
};

const tokengenerate = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

module.exports = CreateUser1;