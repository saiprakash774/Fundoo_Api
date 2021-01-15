var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})

var User = mongoose.model("Product", UserSchema);

class userModel {
    create(req, next) {
        // try{
        return new Promise((resolve, reject) => {
            User.create(req).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
        // }catch(err){
        //     next(err);
        // }
    }
}
module.exports = new userModel();
