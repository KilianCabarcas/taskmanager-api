import { Router } from 'express';
import TaskModel from '../models/task.model';

const router = Router();

// Crear tarea
router.post('/', async (req, res) => {
  try {
    const task = new TaskModel(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Actualizar una tarea
router.put('/:id', async (req, res) => {
  try {
    const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;
