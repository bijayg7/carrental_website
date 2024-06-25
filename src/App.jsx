import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cars, {loader as carsLoader} from './pages/Cars/Cars'
import CarDetail, {loader as carDetailLoader} from './pages/Cars/CarDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostCar, {loader as hostCarsLoader} from './pages/Host/HostCar'
import HostCarDetails, {loader as hostCarDetailsLoader} from './pages/Host/HostCarDetails'
import HostCarInfo from './pages/Host/HostCarInfo'
import HostCarPricing from './pages/Host/HostCarPricing'
import HostCarPhotos from './pages/Host/HostCarPhotos'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login, {loader as loginLoader, action as loginAction} from './pages/Login'
import { requireAuth } from './utils/auth'

import './server'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
        <Route path="cars" element={<Cars />} loader={carsLoader} errorElement={<Error/>} />
        <Route path="cars/:id" element={<CarDetail />} loader={carDetailLoader} errorElement={<Error/>}/>
        <Route path="host" element={<HostLayout />} loader={ async ({request}) => await requireAuth(request)}>
          <Route index element={<Dashboard />} loader={ async ({request}) => await requireAuth(request)} />
          <Route path="income" element={<Income />} loader={ async ({request}) => await requireAuth(request)} />
          <Route path="cars" element={<HostCar />} loader={hostCarsLoader} errorElement={<Error/>} />
          <Route path="cars/:id" element={<HostCarDetails/>} loader={hostCarDetailsLoader} errorElement={<Error/>} >
            <Route index element={<HostCarInfo/>} loader={ async ({request}) => await requireAuth(request)} />
            <Route path="pricing" element={<HostCarPricing/>} loader={ async ({request}) => await requireAuth(request)} />
            <Route path="photos" element={<HostCarPhotos/>} loader={ async ({request}) => await requireAuth(request)} />
          </Route>
          <Route path="reviews" element={<Reviews />} loader={ async ({request}) => await requireAuth(request)} />
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

