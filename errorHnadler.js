const AppError = require("./AppError");

const errorHandler = (error,req, res, next)=>{
    console.log("err"+ error);
    if(error.name === 'ValidationError') {
        return res.status(400).json({success: false, type: 'ValidationError', details: error.details});
    }
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({success: false, type: 'AppError', errorCode: error.errorCode});
    }
    return res.status(500).json({success: false, err: error.message});
}
module.exports = errorHandler;

