import React from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getImageUrl } from '../../utils/image-util'
import { getCars } from '../../utils/api'

export async function loader(){
  return getCars()
}

function Cars() {
  const cars = useLoaderData()
  const[searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  
  const filteredElements = typeFilter ? cars.filter(car => (car.type === typeFilter)) : cars 
                          

  const carElements = filteredElements.map( car => (
    <div key={car.id} className="car-tile">
      <Link 
        to={car.id} 
        state={{search : searchParams.toString(),type : typeFilter}}
        aria-label={`View details for ${car.name}, 
        priced at $${car.price} per day`}
      >
        <img src={getImageUrl(car.imageUrl)} alt={`Image of ${car.name}`} />
        <div className="car-info">
          <p className='car-name'>{car.name}</p>
          <p>${car.price}<span>/day</span></p>
        </div>
      </Link>
      <i className={`car-type ${car.type} selected`}>{car.type}</i>
    </div> 
  ))


  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
  }




  return (
    <div className="car-list-container">
      <h1>Explore our car options</h1>
      <div className="car-list-filter-buttons">
        <button onClick={() => handleFilterChange("type","luxury")} className={`car-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
        <button onClick={() => handleFilterChange("type", "sedan")} className={`car-type sedan ${typeFilter === "sedan" ? "selected" : ""}`}>Sedan</button>
        <button onClick={() => handleFilterChange("type","SUV")} className={`car-type SUV ${typeFilter === "SUV" ? "selected" : ""}`}>SUV</button>
        {typeFilter && <button onClick={() => handleFilterChange("type",null)} className="car-type clear-filters">Clear</button> }
      </div>
      <div className="car-list">
      {carElements}
      </div>
    </div>
  )
}

export default Cars