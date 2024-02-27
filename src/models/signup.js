const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    email : {
        type:String,
        require:true,
        unique:true
    },
    password : {
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    }
})

//collection

const Signup = new mongoose.model("Signup", employeeSchema);

module.exports= Signup;