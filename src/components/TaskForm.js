import React, { useState } from 'react'

const TaskForm = (props) => {
  const [task, setTask] = useState({
    title: '',
    subject: '',
    hours: '',
    mood: '😃 Productive'
  })

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if(task.title && task.subject && task.hours){
      props.addTask(task)
    }
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h4 className="mb-3">Add Study Task</h4>
        <input type="text" name="title" placeholder="Task Title" className="form-control mb-2" onChange={handleChange} />
        <input type="text" name="subject" placeholder="Subject" className="form-control mb-2" onChange={handleChange} />
        <input type="number" name="hours" placeholder="Study Hours" className="form-control mb-2" onChange={handleChange} />
        <select name="mood" className="form-select mb-3" onChange={handleChange}>
          <option>😃 Productive</option>
          <option>😐 Normal</option>
          <option>😴 Tired</option>
        </select>
        <button className="btn btn-primary" onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  )
}

export default TaskForm