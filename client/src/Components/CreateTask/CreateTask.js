import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateTask () {
    const navigate = useNavigate();
    const [task,setTask] = useState({
        name:"",
        completed:false
    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        setTask((prevData)=> {
            return {
                ...prevData,
                [name]: value
            }
        });
    }
    const createTask = (e) => {
        e.preventDefault();
        const newTask = {
            name: task.name,
            completed: task.completed
        };
        console.log(newTask);
        axios.post("https://todosapp-backend.herokuapp.com/tasks/create",newTask)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        navigate("/");
    }
    return (
        <div className="container mt-5">
            <p className="text-center h3">What's your plan today?</p>
            <form className="w-75 m-auto" onSubmit={createTask}>   
                <div className="input-group pt-3">
                    <input type="text" className="form-control" placeholder="Add your task" name="name" value={task.name} onChange={handleChange}/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-dark">Create Task</button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default CreateTask;