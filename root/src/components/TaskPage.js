import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`/api/tasks/${id}`)
      .then(res => res.json())
      .then(data => setTask(data));
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}

export default TaskPage;
