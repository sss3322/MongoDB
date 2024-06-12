const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User2 = require('../Model/Userschema2');

const UserSignup = async (req, res) => {
    const { username, email, password } = req.body;
    const alreadyExist = await User2.findOne({ email: email });

    if (alreadyExist) {
       return res.json("Already Exist");
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User2.create({
            username,
            email,
            password: hashedPassword
        });

        const token = tokengenerate(user._id);

        res.json({
            user,
            token
        });
    }
};

const tokengenerate = (id) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret is not provided');
    }

    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

module.exports = UserSignup;