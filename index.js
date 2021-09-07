//here all the required files are added.
//locally the web app is running on port 8000
const express = require('express');
const port = process.env.PORT || 8000;
const cors = require('cors');
const JWT = require('./config/passport_jwt');
const dotenv = require('dotenv').config();
const db = require('./config/mongoose');

const app = express();
app.use(cors());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested:With, Content-Type, Accept"
    );
    next();
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use('/', require('./routes/index') );

app.listen(port, (err) => {
    if(err){
        console.log(`error while running the server on port:${port}`);
    }
    console.log(`Server is up and running on port:${port}`);
})
