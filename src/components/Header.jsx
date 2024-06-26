import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function Header() {
    
    function logOut(){
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link className='logo' to="/">#hamrorental</Link>
            <nav>
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : null} >About</NavLink>
            <NavLink to="/cars" className={({isActive}) => isActive ? "active-link" : null} >Cars</NavLink>
            <NavLink to="/host" className={({isActive}) => isActive ? "active-link" : null}>Host</NavLink>
            <Link to="login" className="login-link">Login</Link>
            <button onClick={logOut}>Log Out</button>
            </nav>
        </header>
    )
  }
  
  export default Header