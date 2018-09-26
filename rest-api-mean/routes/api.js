const express = require('express')

const router = express.Router();

const Ninja = require('../models/ninja')

//get new ninja from db
router.get('/ninjas',(req,res)=>{
        res.send({type:'geting the ninjas'});
})


//add a new ninja to db
router.post('/ninjas',(req,res)=>{
    console.log(req.body);
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
})


//update a ninja in db
router.put('/ninjas/:id',(req,res)=>{
    res.send({type:'PUT'});
})



//delete a ninja in db
router.delete('/ninjas/:id',(req,res)=>{
    res.send({type:'DELETE'});
})


module.exports = router;