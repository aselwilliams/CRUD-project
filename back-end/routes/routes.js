const express=require('express')

const router=express.Router()

const signUpTemplate=require('../register')

router.post('/register',async (request,response)=>{
    response.send('data has been successfully sent')
    const signUpUser=await signUpTemplate({
        fullname:request.body.fullname,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signUpUser.save()
    .then(data=>response.json())
    .catch(err=>response.json(err))
})
module.exports=router

// axios('localHost:3003/register', {fullname:'asdff', username: 'sdaddf'})