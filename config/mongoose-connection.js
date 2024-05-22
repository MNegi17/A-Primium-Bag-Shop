const mongoose = require("mongoose");

mongoose
.connect('mongodb://127.0.0.1:27017/Scatch')
.then(()=>{
    console.log("Connected to server")
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose.connection;