const express = require("express");
const UserRouter = express.Router();
const {signupUser,getAllUsers} = require("../controllers/user.controller")

UserRouter.post("/users",signupUser)

UserRouter.get("/users",getAllUsers)

module.exports = UserRouter; 

