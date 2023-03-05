const express = require('express');

const cors = require('cors');

const mongodb = require('mongoose');

const usersRouters = require('./routers/userRouter')

const User = require("./models/userModel");

const app = express();

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT_NUMBER || 5050;

const DBURL = process.env.DATABASE_URL;

app.listen(PORT, () => {
    console.log(`NodeServer running on PORT: ${PORT}`);
});

mongodb.connect(DBURL).then(() => {
    console.log('Connected to MongoDataBase Server');
}).catch((error) => {
    console.log(error);
});

app.use("/api", usersRouters);

