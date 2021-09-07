const User = require('../models/User');
const Student = require('../models/Student');
const Interview = require('../models/Interviews');
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require('jsonwebtoken');

//function for implement the hashed password
async function hashPassword (password) {
    const saltPassword = await new Promise((resolve,reject) => {
        bcrypt.genSalt(saltRounds, function (err, salt){
            if(err){
                reject(err);
            }
            resolve(salt);
        })
    })
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltPassword, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
  
    return hashedPassword
}

//function to validate the password
async function comparePassword(password,hash){
    return await new Promise((resolve,reject) => {
        bcrypt.compare(password, hash, function(err, isMatch){
            if(err){
                reject(err);
            }
            resolve(isMatch);
        })
    })
}

//controller action to create the user
module.exports.create = async (req, res) => {
    
    try{
        //checking whether the user exits in the DB or not!,
        const check = await User.findOne({email:req.body.email});
        if(check){
            console.log("User already Exists!");
            return res.status(200).json({
                message:"User already Exists!",
            })
        }
        if(req.body.password !== req.body.confirm_password){
            return res.status(400).json({
                message:"Password Mismatch!",
            })
        }
        let hidePassword = await hashPassword(req.body.password);
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hidePassword,
        })

        return res.status(200).json({
            message:`Account created successfully for ${req.body.name}`,
            user,
        })
    }catch(err){
        console.log("error while creating the user Account", err);
        return res.status(200).json({
            message:"error while creating the user Account",
            err,
        })
    }
}

//controller action to valid the use while signing in
module.exports.signIn = async (req, res) => {
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            console.log("Please SignUp First");
            return res.status(400).json({
                message:"Please SignUp First",
            })
        }
        let isValid = await comparePassword(req.body.password,user.password);
        if(isValid){
            const students = await Student.find({});
            const interviews = await Interview.find({}).populate('students.student', 'name');
            return res.status(200).json({
                message:"signed_in done",
                data: {
                    token: jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: "1000000" }),
                  },
                  success:true,
                  students,
                  interviews,
                  user,
            });
        }
        return res.status(400).json({
            message:"Error while signing in",
        })
    }catch(err){
        console.log("error while Signing In!", err);
        return res.status(200).json({
            message:"error while Signing In!",
            err,
        })
    }
}