const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/users')
const excerciseRoute = require('./routes/excercise')

// for supporting dot env file
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// adding middlewares
app.use(cors());
app.use(express.json());

// creating connection with the mongodb
const dbUri = process.env.ATLAS_URI;
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Database is connected');
})
.catch(err=>console.log(err));


// setup routes
// app.use('/excercises',excerciseRoute)
// app.use('/users',userRoute)


app.listen(port,()=>{
    console.log(`The server is running on localhost:${port}`)
})