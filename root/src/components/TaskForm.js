import React, { useState } from 'react';

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: taskTitle, description: taskDescription })
    })
      .then(res => res.json())
      .then(data => alert('Task created successfully!'))
      .catch(err => console.error('Error creating task:', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskTitle} 
        onChange={(e) => setTaskTitle(e.target.value)} 
        placeholder="Task Title" 
        required 
      />
      <textarea 
        value={taskDescription} 
        onChange={(e) => setTaskDescription(e.target.value)} 
        placeholder="Task Description" 
        required 
      />
      <button type="submit">Create Task</button>
    </form>
  );
}

export default TaskForm;
