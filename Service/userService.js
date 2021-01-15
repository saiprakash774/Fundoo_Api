const userModel=require('../Model/model')
class userService{
    addUserService=(req,next)=>{
        // try{
            console.log(req);
            return userModel.create(req).then((result)=>{
                return({message:'Registration Successful!',data:result})
            }).catch((error)=>{
                return({message:'failed to Registration ',error:null})
            })
        // }catch(error){
        //     next(error);
        // }
    }
}
module.exports=new userService();