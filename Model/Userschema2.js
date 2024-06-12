const mongoose = require('mongoose');

const UserSchema2 = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User2 = mongoose.model('User2', UserSchema2);

module.exports = User2;
