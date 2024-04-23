import axios from 'axios'

export async function getCars() {
    try{
        const response = await axios.get("/api/cars")
        const result = await response.data
        return result.cars
    } catch(error){
       console.log( error.message)
    }
}
