import React from 'react'
import { NavLink } from 'react-router-dom'
import { authenticatedUser } from '../store'
import { useRecoilValue } from 'recoil'

const Navbar = () => {
  const auth = useRecoilValue(authenticatedUser)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {auth.check && (
                <NavLink className="nav-link " to="/dashboard">
                  Dashboard
                </NavLink>
              )}
            </li>
          </ul>

          {auth.check ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/login">
                  {auth.user.name}
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
