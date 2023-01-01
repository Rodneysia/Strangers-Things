import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/posts"><li>Home</li></NavLink>
        <NavLink to="/users/me"><li>Profile</li></NavLink>
        <NavLink to="/users/login"><li>Logout</li></NavLink>   
      </ul>
    </div>
  )
}

export default Navbar
