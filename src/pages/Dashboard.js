import React from 'react'

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(t => t.completed).length
  const totalHours = tasks.reduce((sum, t) => sum + Number(t.hours), 0)

  return (
    <div className="container mt-4">
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow">
            <h6 className="text-muted">Total Tasks</h6>
            <h2 className="text-primary">{totalTasks}</h2>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow">
            <h6 className="text-muted">Completed Tasks</h6>
            <h2 className="text-success">{completedTasks}</h2>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow">
            <h6 className="text-muted">Total Study Hours</h6>
            <h2 className="text-warning">{totalHours}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard