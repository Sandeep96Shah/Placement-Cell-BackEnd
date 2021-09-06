const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/Placement-Cell',{useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on("error", (err) => {
//     console.log("error in connecting to the MongoDB");
// });

// db.once('open', () => {
//     console.log("Connected to the MongoDb Successfully!");
// })

//changes here

mongoose.connect("mongodb://cnplacement:wikor1tUpFDVbKLd@cluster0-shard-00-00.tc1p6.mongodb.net:27017,cluster0-shard-00-01.tc1p6.mongodb.net:27017,cluster0-shard-00-02.tc1p6.mongodb.net:27017/placementCell?ssl=true&replicaSet=atlas-4qukvb-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => {
    console.log("Connected to the mongoose atlas!");
})
.catch((error)=>console.log("Listen nhi ho rha h!",error.message));
