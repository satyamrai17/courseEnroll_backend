const express= require('express');
const studentRouter = require('./routes/studentRoute');
const courseRouter= require('./routes/courseRoute');
const enrollRouter= require('./routes/enrollmentRoutes')
require('dotenv').config();

const PORT= process.env.PORT ||5000

const app=express();
app.use(express.json());
app.use('/student', studentRouter);
app.use('/course',courseRouter);
app.use('/enroll', enrollRouter)


app.listen(PORT, ()=>{
    console.log(`app is running on localhost:${PORT}`);
})