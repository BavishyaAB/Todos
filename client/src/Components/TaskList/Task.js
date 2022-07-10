import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CloseButton, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Task ({currentTask,deleteTask}) {
    const navigate = useNavigate();
    const id = currentTask._id;
    const [show,setShow] = useState(false);
    const [editTask,setEditTask] = useState({
        name:"",
        completed:""
    });
    useEffect(() => {
            axios.get(`https://todosapp-backend.herokuapp.com/tasks/${id}`)
            .then((res) => {
                setEditTask((prevTask) => {
                    return {
                        ...prevTask,
                        name:res.data.task.name,
                        completed:res.data.task.completed
                    }
                })
            })
    },[])
    console.log(editTask);
    const handleChange = (e) => {
        const {name,value} = e.target;
        setEditTask((prevData)=> {
            return {
                ...prevData,
                [name]: value
            }
        });
    }
    const updateTask = (e) => {
        e.preventDefault();
        const editedTask = {
            name:editTask.name,
            completed:editTask.completed
        };
        console.log(editedTask);
        axios.put(`https://todosapp-backend.herokuapp.com/tasks/${id}`,editedTask)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setShow(false);
        navigate("/");
    }
    const handleComplete = (e) => {
        console.log("Inside handle complete");
        const completedtask = editTask;
        completedtask.completed?completedtask.completed = false:completedtask.completed = true;
        currentTask.completed = completedtask.completed;
        setEditTask(completedtask);
        axios.put(`https://todosapp-backend.herokuapp.com/tasks/${id}`,completedtask)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }
    return (
        <Card className="mt-1" bg={editTask.completed?"success":"info"}>
            <Card.Body>
            <span className="d-inline-block" onClick={handleComplete}>
            {currentTask.name}</span>
            <CloseButton className="float-end mt-1 ms-4" onClick={() => deleteTask(currentTask._id)}></CloseButton>
            <Button variant="dark" size="sm" className="float-end ms-4" onClick={()=>setShow(true)}>Edit</Button>
            </Card.Body>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input type="text" className="form-control" name="name" value={editTask.name} onChange={handleChange}/>
                        <br/>
                        <Button variant="dark" onClick={updateTask}>
                            Save Changes
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </Card>
    )
}

export default Task;