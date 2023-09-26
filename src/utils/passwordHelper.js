const bcrypt = require("bcrypt");


const generateSalt = () => {
  const salt = bcrypt.genSaltSync(10);
  return salt;
};

const hashPassword = (plainPassword, salt) => {
  const hashedPassword = bcrypt.hashSync(plainPassword, salt);
  return hashedPassword;
};

const decodePassword = (plainPassword,hashPassword)=>{
     
  const result = bcrypt.compareSync(plainPassword,hashPassword);
   
  return result;
}

module.exports = {
    generateSalt,
    hashPassword,
    decodePassword
  };