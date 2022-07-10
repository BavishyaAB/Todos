import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter task name"],
        trim: true,
        maxlength:[50,"Task name cannot be more than 20 characters"]
    },
    completed:{
        type:Boolean,
        default:false,
    },
})
const Task = mongoose.model("Tasks",taskSchema)
export default Task;