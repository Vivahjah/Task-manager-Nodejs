const Task = require("../models/Task");


const createTask = async(req, res) => {
    try {

        const task = await Task.create(req.body);
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

const getAllTasks = (req, res) => {
    res.send("All Task");
};
const getSingleTask = (req, res) => {
    res.json({ id: req.params.id });
};
const deleteTask = (req, res) => {
    res.send("Deleted task");
};
const updateTask = (req, res) => {
    res.send("Updated Single Task");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
};