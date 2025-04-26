import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/task.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/tasks', taskRoutes);

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/taskmanager')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
