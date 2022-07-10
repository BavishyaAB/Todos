import Task from "../models/task.js";

export const createTask = (req,res) => {
    const {name,completed} = req.body;
    const newTask = new Task({
        name,
        completed
    })
    .save()
    .then(() => res.status(201).json({success:true, msg:"Task creation successful"}))
    .catch((err) => res.status(400).json(`Error: ${err}`));
}

export const getAllTask = (req,res) => {
    Task.find()
    .then((tasks) => res.status(201).json({tasks}))
    .catch((err)=> res.status(400).json(`Error: ${err}`));
}

export const getTask = (req,res) => {
    const {id:taskId} = req.params;
    Task.findById(taskId)
        .then((task) => res.status(201).json({task}))
        .catch((err) => res.status(400).json(`Error: ${err}`));
}

export const updateTask = (req,res) => {
    const {id:taskId} = req.params;
    Task.findById(taskId)
        .then((task) => {
            task.name = req.body.name;
            task.completed = req.body.completed;
            task.save()
                .then(() => res.status(201).json({success:true, msg:"Task updation successful"}))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
}

export const deleteTask = (req,res) => {
    const {id:taskId} = req.params;
    Task.findByIdAndDelete(taskId)
        .then((task) => res.status(201).json({success:true,msg:"Task deleted successfully"}))
        .catch((err) => res.status(400).json(`Error: ${err}`));
}