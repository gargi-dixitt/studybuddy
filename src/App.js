import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import Dashboard from './pages/Dashboard';
import Timer from './components/Timer';

import { getTasks, addTask as addTaskAPI, deleteTask, completeTask } from "./services/api";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res.data);
    });
  }, []);

  const addTask = async (task) => {
    const res = await addTaskAPI(task);
    setTasks([...tasks, res.data]);
  };

  const deleteTaskHandler = async (index) => {
    await deleteTask(index);

    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const completeTaskHandler = async (index) => {
    await completeTask(index);

    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: true } : t
    );

    setTasks(updated);
  };

  return (
    <div>
      <Navbar />
      <Dashboard tasks={tasks} />
      <Timer />
      <TaskForm addTask={addTask} />

      <div className="container mt-4">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            deleteTask={() => deleteTaskHandler(index)}
            completeTask={() => completeTaskHandler(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
