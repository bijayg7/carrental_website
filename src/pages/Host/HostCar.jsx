import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { getImageUrl } from "../../utils/image-util"

function HostCar() {
    const[hostCars, setHostCars] = useState([])

    const hostCarElements = hostCars.map( hostCar => (
        <Link
            to={hostCar.id}
            key={hostCar.id}
            className="host-car-link-wrapper"
        >
            <div className="host-car-single" key={hostCar.id}>
                <img src={getImageUrl(hostCar.imageUrl)} alt={`Photo of ${hostCar.name}`} />
                <div className="host-car-info">
                    <p>{hostCar.name}</p>
                    <p>${hostCar.price}/day</p>
                </div>
            </div>
        </Link>
    ))


    useEffect(() => {
        axios.get('/api/host/cars')
        .then (res => setHostCars(res.data.cars))
    }, [])

    return (
        <section>
            <h1 className="host-cars-title">Your listed cars</h1>
            <div className="host-cars-list">
                {
                    hostCars.length > 0 ? (
                        <section>
                            {hostCarElements}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
  }
  
  export default HostCar