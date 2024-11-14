const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'], 
    default: 'low',
  },
  stage: {
    type: String,
    enum: ['to-do', 'in-progress', 'done'], 
    default: 'to-do',
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };
