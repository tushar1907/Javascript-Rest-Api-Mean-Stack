const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//setup express app
const app = express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(422).send({error:err.message})
})

//listen for request
app.listen(4000, ()=> {
    console.log("Now listening for request on port 4000");
})