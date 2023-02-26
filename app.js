const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
const notFound = require("./middleware/notFound")
require("dotenv").config();
require("./db/connection");

const app = express();

//middleware
app.use(express.json());
app.use(express.static('./public'))

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);


const Port = 5000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(Port, console.log(`Server running on port ${Port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();