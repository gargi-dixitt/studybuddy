import React from 'react'

const TaskCard = ({ task, deleteTask, completeTask }) => {
  return (
    <div className={`card p-3 shadow mb-3 ${task.completed ? 'border-success' : ''}`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-1" style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'green' : 'black' }}>
            {task.title}
          </h5>
          <small className="text-muted">{task.subject} • {task.hours} hrs • {task.mood}</small>
          {task.completed && <span className="badge bg-success ms-2">Completed ✅</span>}
        </div>
        <div>
          <button className="btn btn-success btn-sm me-2" onClick={completeTask} disabled={task.completed}>Complete</button>
          <button className="btn btn-danger btn-sm" onClick={deleteTask}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard