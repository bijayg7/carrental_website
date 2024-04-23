import React from "react"
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

function HostLayout() {
    const style = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
  

    return (
        <>
        <nav className="host-nav">
        <NavLink to="." end style={({isActive}) => isActive ? style : null} >Dashboard</NavLink>
        <NavLink to="income" style={({isActive}) => isActive ? style : null} >Income</NavLink>
        <NavLink to="cars" style={({isActive}) => isActive ? style : null} >Cars</NavLink>
        <NavLink to="reviews" style={({isActive}) => isActive ? style : null} >Reviews</NavLink>
        </nav>
        <Outlet />
        </>
    )
  }
  
  export default HostLayout