const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://ckguptmaurya:Caq6cL4p1joBrdlT@cluster0.jet2lxk.mongodb.net/";

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