const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/project")
.then(()=>{
console.log("Connecton is Estableshed")
})
.catch((err)=>{
    console.log(`err is :${err}`)
})