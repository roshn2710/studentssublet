const express = require('express')
const mongoose = require('./db/mongoose')
const passport = require("passport");

const passportRoute = require("./route/passport");
const passportConfig = require("./auth/passport-config.js");
const postRoute = require("./route/post");
const cors = require("cors");


const app = express()

app.use(cors());
app.use(passport.initialize())
const port = process.env.port | 9000

app.use(express.json())
app.use(cors());

passportConfig(app,mongoose);
passportRoute(app,mongoose);
postRoute(app,mongoose);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);  
})