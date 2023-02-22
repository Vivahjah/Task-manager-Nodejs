const getAllTasks = (req, res) => {
    res.send('All Task')
}
const createTask = (req, res) => {
    res.send('created Task')
}
const getSingleTask = (req, res) => {
    res.send('Single Task')
}
const deleteTask = (req, res) => {
    res.send('Deleted task')
}
const updateTask = (req, res) => {
    res.send('Updated Single Task')
}



module.exports = { getAllTasks, createTask, getSingleTask, updateTask, deleteTask }