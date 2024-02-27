const express  = require('express');
const path = require('node:path');
const app = express();
const hbs = require('hbs');

require("./db/conn");
const Login = new require("./models/login");
const Signup = new require("./models/signup");
const Faculty = new require("./models/faculty");
const Cours = new require("./models/cours");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", 'hbs');
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/", (_req,res) => {
    res.render("home");
    //res.sendFile('/Users/JAINISH/Desktop/sgp/templates/views/login.hbs');
    //res.sendFile('/Users/JAINISH/Desktop/sgp/templates/views/singup.hbs');
});

app.get("/home",(_req,res) => {
    res.render("home");
})

app.get("/login",(_req,res) => {
    res.render("login");
})

app.post("/login",async(req,res) => {
    try {
        const password = req.body.password
        if(password === (req.body.password))
        {
            const loginemployee = new Login({
                email: req.body.email,
                password: req.body.password
            }) 

            const logine = await loginemployee.save();
            res.status(201).render("home");
        }else{
            res.status("password are not match");
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/signup",(_req,res) => {
    res.render("signup");
})

app.post("/signup",async (req,res) => {
    try {
        const password = req.body.password
        const cpassword =req.body.cpassword
        if(password === cpassword)
        {
            const signupemployee = new Signup({
                email: req.body.email,
                password: req.body.password,
                cpassword:req.body.cpassword
            }) 

            const signupe = await signupemployee.save();
            res.status(201).render("home");
        }else{
            res.status("password are not match");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/cours",(_req,res) => {
    res.render("cours");
})

app.post("/cours",async (req,res) => {
    try {
        const coursemployee = new Cours({
            CName: req.body.coursename,
            ccode: req.body.coursecode,
            cTime: req.body.coursetime,
            CDays: req.body.coursedays
        })

        const Courses = await coursemployee.save();
            res.status(200).render("home");
        
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/faculty",(_req,res) => {
    res.render("faculty");
})

app.post("/faculty",async (req,res) => {
    try {
        const facultyemployee = new Faculty({
            name:  req.body.facultyname,
            facultyid:    req.body.facultyid,
            email: req.body.facultyemail,
        })

        const Facultyes = await facultyemployee.save();
            res.status(200).render("home");
        
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/about",(_req,res) => {
    res.render("about");
})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})