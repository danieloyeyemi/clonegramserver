const express = require('express')
const app = express()
const cors = require('cors')
const URI = 'mongodb+srv://danoye:dannydo93@cluster0.osdw8.mongodb.net/instagram_tb?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(URI,(err)=>{
    if(err){
        console.log(`mongoose no connect`)
    }else{
        console.log(`mongoose connected successfully`)
    }
})
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))
app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
// app.get('/*',(req,res)=>{
//     res.sendFile(__dirname+"/build/index.html")
// })
require('dotenv').config()
const PORT = process.env.PORT||3000
const userRouter = require('./routes/user.route')
app.use('/users',userRouter)

app.listen(PORT,()=>{
    console.log(`app is listening on port : ${PORT}`)
})