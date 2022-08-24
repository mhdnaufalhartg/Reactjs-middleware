import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../views/auth/login'
import Register from '../views/auth/register'
import Dashboard from '../views/dashboard'
import Home from '../views/home'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Router
