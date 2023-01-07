import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const auth = window.localStorage.getItem('token');
 
  const logout = () => {
    window.localStorage.removeItem('token');
    ;
    }
  return (
    <>
    <nav className="nav">
      
      <div className="nav-container">
        <Link to="/"> <h1>Stranger's Things</h1></Link>
        <ul className="navList">
          <li><NavLink to="/"> Home </NavLink></li>
          <li><NavLink to="/posts"> Posts </NavLink></li>
          <li><NavLink to="/users/me"> Profile </NavLink></li>
          <li><NavLink to="/users/register"> Register </NavLink></li>
          <li>{ auth ? <NavLink onClick={logout} to="/">Logout</NavLink> : 
           <NavLink to="/users/login">Login</NavLink>}</li>
        </ul>
      </div>

    </nav>
    </>
  )
}

export default Navbar
