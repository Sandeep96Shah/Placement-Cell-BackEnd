const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

const cors = require('cors');
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

const dotenv = require('dotenv').config();

const db = require('./config/mongoose');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const JWT = require('./config/passport_jwt');

app.use('/', require('./routes/index') );

app.listen(port, (err) => {
    if(err){
        console.log(`error while running the server on port:${port}`);
    }
    console.log(`Server is up and running on port:${port}`);
})
