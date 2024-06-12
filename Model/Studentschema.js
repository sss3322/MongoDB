
const mongoose = require('mongoose');

const Studentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    courses: {
        type: Array,
        required: true
    }
});

const Student = mongoose.model('Student', Studentschema);

module.exports = Student;
