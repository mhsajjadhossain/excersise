const express = require('express');
const router = express.Router()
const User = require('../models/user.model')


router.route('/').get((req,res)=>{
    User.find()
        .then(users =>res.json(users))
        .catch(err=>res.status(400).json('error'+err))
})
router.route('/add').get((req,res)=>{
    const username = req.body.username;
    const user = new User({username});
    user.save()
        .then(() =>res.json('user added'))
        .catch(err=>res.status(400).json('error'+err))
})

module.exports = router;
