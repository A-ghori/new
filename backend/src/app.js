// Create Server
const express = require('express')
const cors = require("cors")
const cookieParser = require ('cookie-parser')
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use(cookieParser());
app.use(express.json()); //Middleware it  bring data from req.body which comes from and do some work
app.get('/',(req,res)=>{
    res.send("Hello WOrld")
})

app.use('/api/auth',authRoutes);
app.use("/api/food",foodRoutes);


module.exports = app;