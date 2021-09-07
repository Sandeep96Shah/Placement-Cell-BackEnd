const Interviews = require('../models/Interviews');

//controller action to create the interview
module.exports.create = async (req, res) => {
    try{
        const check = await Interviews.findOne({company_name:req.body.company_name});
        if(check){
            return res.status(200).json({
                message:"Company Name Already Exists!",
            })
        }
        const interview = await Interviews.create(req.body);
        
        return res.status(200).json({
            message:"Interview Document Created Successfully!",
            interview,
        })
    }catch(err){
        console.log("error while finding the interview document in DB!", err);
        return res.status(500).json({
            message:"error while finding the interview document in DB!",
        })
    }
}

//action to fetch the entire interview list from database
module.exports.all = async (req, res) => {
    try{
        const interviews = await Interviews.find({}).populate('students.student', 'name');
        return res.status(200).json({
            message:"Here is the list of all the Interviews",
            interviews,
        })
    }catch(err){
        console.log("error while fetching all the interviews from the DB!", err);
        return res.status(500).json({
            message:"error while fetching all the interviews from the DB!",
        })
    }
}