const express=require('express')
const { connect } = require('./config/db')
const { userRouter } = require('./routes/user.route')
const { doctorRouter } = require('./routes/doctor.route')
const app=express()
require('dotenv').config()
app.use(express.json())

app.use('/api',userRouter)
app.use('/api',doctorRouter)

app.listen(process.env.Port, async()=>{
    try {
        await connect
        console.log('Connected to Database');
    } catch (err) {
        console.log(err.message);
    } console.log(`Server is running on Port ${process.env.Port}`);
})