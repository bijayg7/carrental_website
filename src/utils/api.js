import axios from 'axios'

export async function getCars(id) {
    const url = id ? `/api/cars/${id}` : "/api/cars"
    try{
        const response = await axios.get(url)
        const result = await response.data
        return result.cars
    } catch(error){
       console.log( error.message)
    }
}

export async function getHostCars(id) {
    const url = id ? `/api/host/cars/${id}` : "/api/host/cars"
    try{
        const response = await axios.get(url)
        const result = await response.data
        return result.cars
    } catch(error){
       console.log( error.message)
    }
}
