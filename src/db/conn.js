const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://21dit077:Jainish18032004@cluster0.qa93kek.mongodb.net/tablelogin",{
    useNewUrlParser:true
}).then(() => {
    console.log(`connection successful`);
}).catch((error) => {
    console.log(error);
})