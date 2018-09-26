const express = require('express')
const router = express.Router();
const Ninja = require('../models/ninja')


//get new ninja from db
router.get('/ninjas',(req,res,next)=>{
        res.send({type:'geting the ninjas'});
})


//add a new ninja to db
router.post('/ninjas',(req,res,next)=>{
    console.log(req.body);
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next)
})


//update a ninja in db
router.put('/ninjas/:id',(req,res,next)=>{
    res.send({type:'PUT'});
})



//delete a ninja in db
router.delete('/ninjas/:id',(req,res,next)=>{
    res.send({type:'DELETE'});
})


module.exports = router;