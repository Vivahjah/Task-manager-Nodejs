const getAllTasks = (req, res) => {
    res.send('All Task')
}
const createTask = (req, res) => {
    res.json(req.body)
}
const getSingleTask = (req, res) => {
    res.json({ id: req.params.id })
}
const deleteTask = (req, res) => {
    res.send('Deleted task')
}
const updateTask = (req, res) => {
    res.send('Updated Single Task')
}



module.exports = { getAllTasks, createTask, getSingleTask, updateTask, deleteTask }


// mongodb+srv://<username>:<password>@cluster0.efvya.mongodb.net/?retryWrites=true&w=majority