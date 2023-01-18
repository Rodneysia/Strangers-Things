import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = ({token}) => {
  const auth = window.localStorage.getItem('token');
console.log("this is navbar", token);
 
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
          <li><NavLink to={{pathname:"/posts" }}
                 state= {{from: "123"}}> Posts </NavLink></li>
          <li><NavLink to="/users/me"> Profile </NavLink></li>
          <li><NavLink to="/users/register" token={token}> Register </NavLink></li>
          <li>{ auth ? <NavLink onClick={logout} to="/">Logout</NavLink> : 
           <NavLink to="/users/login">Login</NavLink>}</li>
        </ul>
      </div>

    </nav>
    </>
  )
}

export default Navbar
