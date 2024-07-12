const express =require("express");

const router =express.Router();

const { loginUser,signupUser}=require("../controllers/userControllers")


// login user
router.post("/login", loginUser);




// signup user
router.post("/signup",signupUser);


module.exports =router;