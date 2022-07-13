const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const dotenv = require("dotenv");
dotenv.config();


const port = process.env.PORT || 3000; 

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}
start()


