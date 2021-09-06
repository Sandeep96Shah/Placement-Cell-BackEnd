const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    batch:{
        type:String,
        required:true,
    },
    college:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Placed", "Not Placed"],
        required:true,
    },
    courses_scores:[
        {
            dsa:{
                type:String,
                //required:true,
            },
            webD:{
                type:String,
                //required:true,
            },
            react:{
                type:String,
                //required:true,
            }

        },
    ],
    interviews:[
        {
            company_name:String,
            date_of_interview:String,
            result:{
                type:String,
                enum:["Pass", "Fail", "On Hold", "Didn't Attend"],
            }
        }
    ],
},{
    timestamps:true,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;