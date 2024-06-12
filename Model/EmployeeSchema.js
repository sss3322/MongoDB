const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    empName: { type: String, required: true },
    empId: { type: String, required: true },
    salary: { type: Number, required: true },
    dept: { type: String, required: true },
    deptId: { type: String, required: true }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
