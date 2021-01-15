const express=require('express');
const app=express();
const route=require('./Route/routes.js');
const port=5000;

app.use(express.json())
app.use('/api',route);

app.listen(port, ()=>{
    console.log(`Server at port ${port}`);
    require('./config/db.connection');
});