const express = require("express");
const UserRouter = express.Router();
const {signupUser,getAllUsers,loginUser,getUserByEmail} = require("../controllers/user.controller")
const authToken = require("../middleware/auth-token")

// creating Users
UserRouter.post("/users",signupUser)

// getting all users from Database
UserRouter.get("/users",getAllUsers)

// User log in api
UserRouter.post("/login",loginUser)

UserRouter.get("/me",authToken,getUserByEmail)

module.exports = UserRouter; 

