const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const schedule = require('node-schedule');

require('dotenv').config();
const port = process.env.PORT || 8080;
const path = require('path');

const app = express();
const server = require('http').Server(app);
app.use(express.json());
app.use(cors());


const userRouter = require('./routes/user/user.router')

app.use('/user', userRouter);

mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true
    }
    ).then((res)=>{
        console.log("Connection established to database"); 
    })


const colorConsole = require('./debug/colorConsole.function');
server.listen(process.env.PORT, () => {
    colorConsole("Green", "", "", `Server active: PORT ` + port); 
});