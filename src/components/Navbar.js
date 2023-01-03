import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="nav">
      
      <div className="nav-container">
        <Link to="/"> <h1>Stranger's Things</h1></Link>
        <ul className="navList">
          <li><NavLink to="/"> Home </NavLink></li>
          <li><NavLink to="/posts"> Posts </NavLink></li>
          <li><NavLink to="/users/register"> Register </NavLink></li>
          <li><NavLink to="/users/login"> Login </NavLink></li>
        </ul>
      </div>

    </nav>
    </>
  )
}

export default Navbar
