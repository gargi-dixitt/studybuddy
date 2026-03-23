import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import Dashboard from './pages/Dashboard';
import Timer from './components/Timer';



function App() {
    const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }])
  }


  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index)
    setTasks(updated)
  }

  const completeTask = (index) => {
    const updated = tasks.map((t, i) => 
      i === index ? { ...t, completed: true } : t
    )
    setTasks(updated)
  }

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
            deleteTask={() => deleteTask(index)}
            completeTask={() => completeTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
