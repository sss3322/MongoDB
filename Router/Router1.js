const CreateUser = require("../Controller/CreateUser");
const { createEmployee, getAllEmployees } = require("../Controller/Employee");
const Getuser = require("../Controller/Getuser")
const express= require('express');
const { userSignup, userLogin, getUserById, deleteUserById, updateUserById } = require("../Controller/UserController");
const { createProduct, getProduct, getProductById, updateProductById, deleteProductById } = require("../Controller/ProductController");
const getDetails = require("../Controller/Getdetails");
const createUser = require("../Controller/HashedPassword");
const UserSignup = require("../Controller/Signup");
const UserLogin = require("../Controller/Login");
const { Createstudent, Getstudent } = require("../Controller/Studentdetails");
const CreateUser1 = require("../Controller/Tokengeneration");
const protect = require("../Middlewares/TokenVerify");

const router=express.Router()

const middleware=[protect]

//Usercontroller
router.route('/createuser').post(CreateUser)
router.route("/signupuser").post(userSignup)
router.route("/loginuser").get(userLogin)
router.route('/getdetails').get(Getuser)
router.route("/getuser/:id").get(getUserById)
router.route("/deleteuser/:id").delete(deleteUserById)
router.route("/updateuser/:id").put(updateUserById)


//Employee
router.route('/create').post(createEmployee);
router.route('/get').get(getAllEmployees);
router.route('/getdetails/:demo').get(getDetails)

//Productcontroller
router.route("/createproduct").post(createProduct)
router.route("/getproducts").get(getProduct)
router.route("/getproduct/:id").get(getProductById)
router.route("/updateproduct/:id").put(updateProductById)
router.route("/deleteproduct/:id").delete(deleteProductById)

router.route('/hash').post(createUser)

router.route('/SignUp').post(UserSignup)

router.route('/login').post(UserLogin)

//Studentdetails
router.route('/createstudent').post(Createstudent)
router.route('/getstudent').get(Getstudent)

router.route('/token').post(CreateUser1)
router.route('/verification').get(middleware,CreateUser1)
module.exports=router