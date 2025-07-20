const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        require: true,
    }
    /*But we need username and password too
    but this package implements it automatically into the Schema
    and also implements hashing and salting too*/
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User' , userSchema);