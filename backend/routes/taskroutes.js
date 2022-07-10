import express from 'express';
import { createTask, deleteTask, getAllTask, getTask, updateTask } from '../controllers/taskcontroller.js';
const router = express.Router();

router.post('/create',createTask);
router.get('/',getAllTask);
router.get('/:id',getTask);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);

export default router;