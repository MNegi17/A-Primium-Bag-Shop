const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Scatch')

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:Array,
    isadmin : Boolean,
    orders: Array,
    contact:Number,
    picture: String
})

module.exports = mongoose.model('user',userSchema);