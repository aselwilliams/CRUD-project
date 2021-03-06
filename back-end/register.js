const mongoose=require('mongoose')

const signUpTemplate= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    }, 
    username:{
        type:String,
        required:true
    },  
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    }, 
    date:{
        type:Date,
        required:Date.now
    }, 
})
module.exports=mongoose.model('users',signUpTemplate)