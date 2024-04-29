import React from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { getImageUrl } from '../../utils/image-util'
import { getCars } from '../../utils/api'

export async function loader({params}){
  return getCars(params.id)
}

function CarDetail() {
    const details = useLoaderData()
    const location = useLocation()

  const type = location.state && location.state.type || "all"

  return (
    <div className="car-detail-container">
      <Link
          to={location.state ? `..?${location.state.search}` : `..` }
          relative="path"
          className="back-button"
      >&larr; <span>Back to {type} cars</span></Link>
            <div className="car-detail">
              <div className="car-detail-image">
                <img src={getImageUrl(details.imageUrl)} alt={details.name}/>
              </div>  
              <div className="car-detail-info-text">
                <i className={`car-type ${details.type} selected`}>{details.type}</i>
                <h2>{details.name}</h2>
                <p className="car-price"><span>${details.price}</span>/day</p>
                <p>{details.description}</p>
                <button className="cardetails-link-button">Rent this car</button>
              </div>
            </div>
    </div>
  )
}

export default CarDetail