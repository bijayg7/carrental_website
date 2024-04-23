import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, Link, useLocation } from 'react-router-dom'
import { getImageUrl } from '../../utils/image-util'


function CarDetail() {
    const [details, setDetails] = useState([])
    const params = useParams()
    const location = useLocation()

  useEffect(() => {
    axios.get(`/api/cars/${params.id}`)
    .then (res => setDetails(res.data.cars))
  }, [])

  const type = location.state && location.state.type || "all"

  return (
    <div className="car-detail-container">
      <Link
          to={location.state ? `..?${location.state.search}` : `..` }
          relative="path"
          className="back-button"
      >&larr; <span>Back to {type} cars</span></Link>
        {details ? (
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
        ) : <h2>Loading...</h2>}
    </div>
  )
}

export default CarDetail