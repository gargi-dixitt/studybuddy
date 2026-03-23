import React from 'react'

const Navbar = () => {
  const scrollToTimer = () => {
    document.getElementById('timer').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <span className="navbar-brand mb-0 h1">📚 StudyBuddy</span>
      <button className="btn btn-light btn-sm" onClick={scrollToTimer}>
        ⏱ Track your study sessions
      </button>
    </nav>
  )
}

export default Navbar