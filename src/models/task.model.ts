import { Schema, model } from 'mongoose';

interface ITask {
  title: string;
  description: string;
  completed: boolean;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

const TaskModel = model<ITask>('Task', taskSchema);

export default TaskModel;
