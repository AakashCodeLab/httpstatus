const Joi = require('joi');
const AppError = require('../AppError');
const schema = Joi.object({
    userId: Joi.number().required()
})
const getuserData = ()=>({userId:12});
exports.getuser = async(req, res, next)=>{
    try{
        const user = getuserData();
        if(!user) {
            throw new Error('not found');
        }
      
    } catch(err) {
        return next(err);
    }
    return res.status(200).json({success: true});
  
}

exports.login = async(req, res, next)=>{
    try{
        console.log(req.body)
        const {error, value} = schema.validate(req.body);
        console.log(error,value)
        if(error) {
            throw new error
        }
      
    } catch(err) {
        return next(err);
    }
    console.log()
    return res.status(200).json({success: true});
  
}


exports.getDetails = async(req, res, next)=>{
    try{
        const user = false
        if(!user) {
            throw new AppError(304, 'test', 400);
        }
      
    } catch(err) {
        return next(err);
    }
    return res.status(200).json({success: true});
  
}