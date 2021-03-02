const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const excersiseSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    duration:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        require:true
    }
},
{timestamp:true})

const Excersise = mongoose.model('excersise',excersiseSchema)
module.exports = Excersise;