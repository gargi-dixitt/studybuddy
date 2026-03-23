import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const format = (s) => {
    const hrs = String(Math.floor(s / 3600)).padStart(2, '0')
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0')
    const secs = String(s % 60).padStart(2, '0')
    return `${hrs}:${mins}:${secs}`
  }

  return (
    <div className="container mt-4 text-center">
      <div className="card p-4 shadow">
        <h5 className="text-muted mb-3">⏱ Study Timer</h5>
        <h1 className="display-4 fw-bold text-primary">{format(seconds)}</h1>
        <div className="mt-3">
          <button className="btn btn-success me-2" onClick={() => setIsRunning(true)}>Start</button>
          <button className="btn btn-warning me-2" onClick={() => setIsRunning(false)}>Pause</button>
          <button className="btn btn-danger" onClick={() => { setIsRunning(false); setSeconds(0) }}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Timer