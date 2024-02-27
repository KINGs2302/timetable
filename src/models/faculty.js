const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    facultyid :{
        type:String,
        require:true,
        unique:true
    },
    email : {
        type:String,
        require:true,
        unique:true
    }
})

//collection

const Faculty = new mongoose.model("Faculty", employeeSchema);

module.exports= Faculty;