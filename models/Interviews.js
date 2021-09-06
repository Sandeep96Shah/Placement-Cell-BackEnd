const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    company_name:{
        type:String,
        required:true,
    },
    date_of_interview:{
        type:String,
        required:true,
    },
    students:[
        {
            student:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Student",
            },
            result:{
                type:String,
                enum:["Pass", "Fail", "On Hold", "Didn't Attend"],
            }
        }
    ]
},{
    timestamps:true,
});

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;