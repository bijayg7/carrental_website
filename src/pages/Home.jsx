import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  

  return (
    <div className="home-container">
        <h1>You got the travel plans, we got the travel cars.</h1>
        <p>Add adventure to your life by joining the #berental movement. Rent the perfect car to make your perfect road trip.</p>
        <Link to="/cars">Find your car</Link>
    </div>
  )
}

export default Home