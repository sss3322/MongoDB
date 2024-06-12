const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User2 = require("../Model/Userschema2");

const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User2.findOne({ email });

    if (!user) {
        return res.json("Invalid email ");
    } 

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
        return res.json("Invalid password");
    }

    const token = tokengenerate(user._id);
   
   
    res.json({
        user: {
            username:user.username,
            email:user.email,
            _id: user._id,
           
        },
        token
    });
};

const tokengenerate = (id) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret is not provided');
    }

    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

module.exports = UserLogin;
