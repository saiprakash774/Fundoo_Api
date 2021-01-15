//const { nextTick } = require('process');
const userService=require('../Service/userService');
const response={};
class userController{
    addUser=(req,res,next)=>{
        // try{
            
            userService.addUserService(req.body).then((result)=>{
            response.success=true;
            response.message=result.message;
            response.data=result.data;
            return res.status(200).send(response);

        }).catch((error)=>{
            response.success=false;
            response.message=error.message;
            response.error=error.error;
            return res.status(400).send(response);

        })
    // }catch(error){
    //     next(error);
    // }
    }
}

module.exports=new userController();