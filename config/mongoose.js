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

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => {
    console.log("Connected to the mongoose atlas!");
})
.catch((error)=>console.log("Listen nhi ho rha h!",error.message));
