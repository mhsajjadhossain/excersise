const express = require('express');
const router = express.Router()
const Excersise = require('../models/excersise.model')


router.route('/').get((req,res)=>{
    User.find()
        .then(excersise =>res.json(excersise))
        .catch(err=>res.status(400).json('error'+err))
})
router.route('/add').get((req,res)=>{
    const excersis = new Excersise({
        username:req.body.username,
        description:req.body.description,
        duration:Number(req.body.duration),
        date:new Date(req.body.date)
    });
    excersis.save()
        .then(() =>res.json('user added'))
        .catch(err=>res.status(400).json('error'+err))
})





module.exports = router;