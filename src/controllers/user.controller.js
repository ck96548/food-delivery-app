const {createUser,returnAllusers} = require("../services/user.service")

const signupUser = async (req,res) => {
    try {
      const response = await createUser(req.body);
  
      return res.json({ message: response });
    } catch (error) {
      return res.json({ Error: error });
    }
  };

  const getAllUsers = async(req,res)=>{
    try {
        const response = await returnAllusers()
    
        return res.json({ message: response });
      } catch (error) {
        return res.json({ Error: error });
      }
  }

module.exports = {
    signupUser,
    getAllUsers
 }