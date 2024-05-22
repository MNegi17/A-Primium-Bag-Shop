const mongoose = require("mongoose");


const ownerschema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    products: Array,
    picture: String,
    gstin:String
})

module.exports = mongoose.model('user',ownerschema);