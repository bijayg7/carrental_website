import React from "react"
import { useState, useEffect } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import axios from "axios"
import { getImageUrl } from "../../utils/image-util"

function HostCarDetails() {
    const [hostCarDetails, setHostCarDetails] = useState([])
    const params = useParams()

    useEffect(() => {
    axios.get(`/api/host/cars/${params.id}`)
    .then (res => setHostCarDetails(res.data.cars))
    }, [])

    const style = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
  
    return (
        
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-car-detail-layout-container">
                <div className="host-car-detail">
                    <img src={getImageUrl(hostCarDetails.imageUrl)} />
                    <div className="host-car-detail-info-text">
                        <i
                            className={`car-type car-type-${hostCarDetails.type}`}
                        >
                            {hostCarDetails.type}
                        </i>
                        <h3>{hostCarDetails.name}</h3>
                        <h4>${hostCarDetails.price}/day</h4>
                    </div>
                </div>
                <nav className="host-car-detail-nav">
                <NavLink to="." end style={({isActive}) => isActive ? style : null} >Details</NavLink>
                <NavLink to="pricing"  style={({isActive}) => isActive ? style : null} >Pricing</NavLink>
                <NavLink to="photos"  style={({isActive}) => isActive ? style : null} >Photos</NavLink>
                </nav>
                <Outlet context={{hostCarDetails}} />
            </div>
        </section>
        
    )
  }
  
  export default HostCarDetails