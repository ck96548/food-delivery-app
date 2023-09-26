const mongoose = require("mongoose");
require('dotenv').config()

const DB_URL = process.env.DB_URL;

const dbConnection = async()=>{
    try{

        await mongoose.connect(DB_URL);
        console.log('DB connection establised');

    }catch(error){

        console.log('DB connection failed')
        console.log('Error: ' + error);

    }
}

module.exports = dbConnection;