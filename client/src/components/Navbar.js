import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './bmi/1.css'
class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link"id="aa13">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link"id="aa13">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link "id="aa13">
            Profile
          </Link>
        </li>
        
        <li className="nav-item">
        <Link to="/create" className="nav-link"id="aa13">Add Data</Link>
        </li>
        <li className="nav-item">
        <Link to="/history" className="nav-link"id="aa13">BMI History</Link>
        </li>
        <li className="nav-item">
        <Link to="/advice" className="nav-link"id="aa13">Advice</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link"id="aa13">About</Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link "id="aa13">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link"id="aa13">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)