const ensureAuthenticated=(req,res,next)=>{
    const jwt =require('jsonwebtoken');
    const auth=req.header('authorization');
    if(!auth){
        return res.status(403)
        .json({message:'unauthorised, jwt token is require'});

    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(err){
        return res.status(403)
        .json({message:'unauthorised, jwt token is wrong or expired'})
    }
}
module.exports=ensureAuthenticated;