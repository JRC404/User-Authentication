const express = require('express');
const bodyParser = require('body-parser');
const user = require("./routes/user")
const InitiateMongoServer = require('./config/db');
require('dotenv').config();


// initiate the Mongo DB server
InitiateMongoServer();

const app = express();

const PORT = process.env.port || 4000;

// our middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: "API working"
    })
});

/** 
 * Router Middleware
 * Router - /user/*
 * Method = *
 */

app.use("/user", user)

app.listen(PORT, (req, res) => {
    console.log(`Server start at PORT ${PORT}`);
});