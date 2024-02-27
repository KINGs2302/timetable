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
    }
})

//collection

const Login = new mongoose.model("Login", employeeSchema);

module.exports= Login;