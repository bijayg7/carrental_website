import React from "react"
import { useOutletContext } from "react-router-dom"

function HostCarPricing() {
    const{hostCarDetails} = useOutletContext()

    return (
        <>
        <h3 className="host-car-price">${hostCarDetails.price}<span>/day</span></h3>
        </>
    )
  }
  
  export default HostCarPricing