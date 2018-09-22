const express = require('express')

const router = express.Router();

//get new ninja from db
router.get('/ninjas',(request,response)=>{
        response.send({type:'GET'});
})


//add a new ninja to db
router.post('/ninjas',(request,response)=>{
    console.log(request.body);
    response.send({
        type:'POST',
        name:request.body.name,
        rank:request.body.rank
    });
})


//update a ninja in db
router.put('/ninjas/:id',(request,response)=>{
    response.send({type:'PUT'});
})



//delete a ninja in db
router.delete('/ninjas/:id',(request,response)=>{
    response.send({type:'DELETE'});
})


module.exports = router;