const config=require('./db.config');
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/user", { useNewUrlParser: true }).then(()=>{
    console.log("successfully connect Database");
}).catch(()=>{
    console.log("could not connect to Database");
    process.exit();
});