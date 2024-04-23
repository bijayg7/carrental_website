import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cars, {loader as carsLoader} from './pages/Cars/Cars'
import CarDetail from './pages/Cars/CarDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostCar from './pages/Host/HostCar'
import HostCarDetails from './pages/Host/HostCarDetails'
import HostCarInfo from './pages/Host/HostCarInfo'
import HostCarPricing from './pages/Host/HostCarPricing'
import HostCarPhotos from './pages/Host/HostCarPhotos'
import NotFound from './pages/NotFound'
import Error from './components/Error'

import './server'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="cars" element={<Cars />} loader={carsLoader} errorElement={<Error/>} />
        <Route path="cars/:id" element={<CarDetail />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path="income" element={<Income />} />
          <Route path="cars" element={<HostCar />} />
          <Route path="cars/:id" element={<HostCarDetails/>} >
            <Route index element={<HostCarInfo/>} />
            <Route path="pricing" element={<HostCarPricing/>} />
            <Route path="photos" element={<HostCarPhotos/>} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

    )
  )
  
  return (
    <RouterProvider router={router} />
  )
}

export default App

