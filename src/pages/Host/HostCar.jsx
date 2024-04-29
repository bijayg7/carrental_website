import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getImageUrl } from "../../utils/image-util"
import { getHostCars } from "../../utils/api"
import { requireAuth } from "../../utils/auth"

export async function loader(){
    await requireAuth()
    return getHostCars()
}

function HostCar() {
    const hostCars = useLoaderData() 

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


    return (
        <section>
            <h1 className="host-cars-title">Your listed cars</h1>
            <div className="host-cars-list">
                <section>
                    {hostCarElements}
                </section>
            </div>
        </section>
    )
  }
  
  export default HostCar