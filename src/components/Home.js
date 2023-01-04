import React from 'react'
import {NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Welcome to Stranger's Things!</h2>
      <NavLink to="/users/login">Login here</NavLink>
    </div>
  )
}

export default Home
