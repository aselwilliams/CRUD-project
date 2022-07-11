const express=require('express')
const app=express()
// const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

//cors
const routerUrls=require('./routes/routes')

dotenv.config()

mongoose.connect(process.env.db,()=>console.log('data base connected'))

app.use(express.json())
app.use('/app', routerUrls)

app.listen(3003,()=>{
    console.log('server has been started')
})