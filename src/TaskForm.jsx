
import React, { useState } from 'react';

const TaskForm = ({ addTask, editTask, currentTask }) => {
  const [taskName, setTaskName] = useState(currentTask ? currentTask.name : '');
  const [taskDescription, setTaskDescription] = useState(currentTask ? currentTask.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      if (currentTask) {
        editTask({ ...currentTask, name: taskName, description: taskDescription });
      } else {
        addTask({ name: taskName, description: taskDescription, completed: false });
      }
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
