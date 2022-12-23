const mongoose = require('mongoose');

// connect mongoose to mongodb

mongoose.connect('mongodb://localhost:4000/', { 
    useNewUrlParser: true
 });


const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})