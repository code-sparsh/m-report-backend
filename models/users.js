const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model

const UserSchema =  new Schema({
    name : String,
    age: Number,
    gender: String,
    city: String,
    area: String
});



const User = mongoose.model('user',UserSchema);

module.exports = User;

