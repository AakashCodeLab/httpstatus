
const errorHandler = (error,req, res, next)=>{
    console.log("err"+ error);
    return res.status(400).json({success: false, err: error.message});
}
module.exports = errorHandler;

