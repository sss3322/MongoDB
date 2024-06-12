const Student = require("../Model/Studentschema");

const Createstudent = async (req, res) => {
    const { name, semester, department, courses } = req.body;
    const studentDetails = await Student.create({
        name,
        semester,
        department,
        courses
    });
    res.json(studentDetails);
};

const Getstudent = async (req, res) => {
    const getStudent = await Student.find();
    res.json(getStudent);
};

module.exports = { Createstudent, Getstudent };
