import React from "react"
import { useOutletContext } from "react-router-dom"

function HostCarInfo() {
    const{hostCarDetails} = useOutletContext()

    return (
        <section className="host-car-detail-info">
            <h4>Name: <span>{hostCarDetails.name}</span></h4>
            <h4>Category: <span>{hostCarDetails.type}</span></h4>
            <h4>Description: <span>{hostCarDetails.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
    }
  

  
  export default HostCarInfo