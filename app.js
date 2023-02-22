const express = require('express');
const tasks = require('./routes/tasks')

const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)




app.get('/', (req, res) => {
    res.send('Hello World');
})















const Port = 5000;


app.listen(Port, console.log(`Server running on port ${Port}...`))