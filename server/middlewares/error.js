export const errorMiddleWare = (err, req, res, next) => {

    err.message ||= "Internal Server Error"
    err.statusCode ||= 500;
    return res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
};

export const TryCatch = (passedFunc) => async (req,res,next) => {
    try{
        await passedFunc(req,res,next);
    }
    catch(err){
        next(err)
    }

}