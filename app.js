require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const userRouter = require("./api/users/user.router");

app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api/user',userRouter);


app.listen(process.env.APP_PORT, () => {
    console.log("server running port:", process.env.APP_PORT) // แสดงผล บน Console APP_PORT at 3000
});