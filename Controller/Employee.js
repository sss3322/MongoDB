const express = require('express');
const Employee = require("../Model/EmployeeSchema.js");


const createEmployee = async (req, res) => {
    const { empName, empId, salary, dept, deptId } = req.body;
   
        const employee = await Employee.create({ empName, empId, salary, dept, deptId });
        res.json(employee);
   
};

const getAllEmployees = async (req, res) => {
   
        const employees = await Employee.find();
        res.json(employees);
   
};

module.exports = { createEmployee, getAllEmployees };
