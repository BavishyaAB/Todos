import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./Task";

function TaskList () {
    const [tasks,setTasks] = useState([]);
    console.log(tasks);
    useEffect(() => {
        axios.get("https://todosapp-backend.herokuapp.com/tasks")
            .then((res) => setTasks(res.data.tasks))
            .catch((err) => console.log(err));
    },[]);
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task._id !== id));
        axios.delete(`https://todosapp-backend.herokuapp.com/tasks/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }
    return (
        <div className="mt-3">
            {tasks.map((task) => {
                return (
                    <Task key={task._id} deleteTask={deleteTask} currentTask={task}/>
                );
            })}
        </div>
    )
}

export default TaskList;