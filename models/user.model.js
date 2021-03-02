
const Exercise = mongoose.model('exercise',excersiseSchema)
module.exports = Exercise;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        minlength:3
    },
},
{timestamp:true})

const User = mongoose.model('users',userSchema)
module.exports = User;