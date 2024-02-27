const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    CName : {
        type:String,
        require:true
    },
    ccode : {
        type:String,
        require:true,
        unique:true
    },
    cTime :{
        type:String,
        require:true
    },
    CDays:{
        type:String,
        require:true
    }
})

//collection

const Cours = new mongoose.model("Cour", employeeSchema);

module.exports= Cours;