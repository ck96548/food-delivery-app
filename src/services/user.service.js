const User = require("../models/user.model");
const {
    generateSalt,
    hashPassword,
  } = require("../utils/passwordHelper");

const createUser = async (body) => {
    
    const user = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      address: body.address,
      phone: body.phone,
    };
    const salt = generateSalt();
    user.password = hashPassword(body.password, salt);// Storing hashed password...

    const result = await User.create(user);
    return { result, msg: "OTP sent to your phone number" };
 };


const returnAllusers = async ()=>{
    const result = await User.find();
    return result;

}

module.exports = {
  createUser,
  returnAllusers
  
};
