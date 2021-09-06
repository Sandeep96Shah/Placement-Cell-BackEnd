const Interviews = require('../models/Interviews');

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

module.exports.all = async (req, res) => {
    // here is it better to fetched the entire informtaion of the student or only the name

    try{
        const interviews = await Interviews.find({}).populate('students.student', 'name');
        //console.log("interviews", interviews);
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