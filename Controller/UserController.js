const User2 = require("../Model/Userschema2");


const userSignup = async (req, res) => {
    const { username, email, password } = req.body;
    const alreadyExist = await User2.findOne({ email: email });

    if (alreadyExist) {
        res.json("Already Exist");
    } else {
        const user = await User2.create({
            username,
            email,
            password
        });
        res.json(user);
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const alreadyExist = await User2.findOne({ email: email, password: password });

    if (!alreadyExist) {
        res.json("Invalid email or password");
    } else {
        res.json(alreadyExist);
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User2.findById(id);
    if (!user) {
        return res.json("User not found");
    }
    res.json(user);
};

const deleteUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User2.findByIdAndDelete(id);
    console.log(user);
    res.json("User Deleted");
};

const updateUserById = async (req, res) => {
    const id = req.params.id;
    const { username, email, password } = req.body;
    const user = await User2.findByIdAndUpdate(id,
        {
            username,
            email,
            password
        });
    res.json(user);
};

module.exports = { userSignup, userLogin, getUserById, deleteUserById, updateUserById };
