const route=require('express').Router();
const userController=require('../Controller/userController');

route.post('/user/registration',userController.addUser);

module.exports=route;
