import { createServer, Model } from "miragejs"


createServer({
    models: {
      cars: Model,
      users: Model
    },

    seeds(server) {
        server.create("car", { id: "1", name: "Ford Mustang", price: 170, description: "Ford Mustang is an iconic American muscle car known for its sleek design and powerful performance, first introduced in 1964. Renowned for its distinctive pony car styling and enduring legacy, the Mustang has remained a symbol of automotive excellence and cultural significance for decades.", imageUrl: "ford.jpg", type: "luxury", hostId: "111" })
        server.create("car", { id: "2", name: "Toyota RAV4", price: 110, description: "Toyota RAV4 is a popular compact crossover SUV known for its reliability, practicality, and versatile performance on and off the road. It offers a spacious interior, fuel-efficient engines, and a range of advanced safety features, making it a top choice for families and adventurers alike.", imageUrl: "toyota-rav4.jpg", type: "SUV", hostId: "222" })
        server.create("car", { id: "3", name: "Mazda 3", price: 80, description: "Mazda 3 is a compact car renowned for its sleek design, engaging driving dynamics, and upscale interior. It offers a blend of performance, fuel efficiency, and advanced technology, making it a popular choice in the compact car segment.", imageUrl: "mazda-3.jpg", type: "sedan", hostId: "111" })
        server.create("car", { id: "4", name: "Tesla Model X", price: 150, description: "Tesla Model X is an all-electric SUV that offers impressive acceleration, ample seating for up to seven passengers, and distinctive falcon-wing doors for easy access. Known for its advanced autopilot capabilities and long-range battery options, it combines luxury, performance, and cutting-edge technology in one sleek package.", imageUrl: "tesla-modelx.jpg", type: "luxury", hostId: "333" })
        server.create("car", { id: "5", name: "Renault Captur", price: 100, description: "Renault Captur is a compact crossover SUV known for its stylish design and versatility, offering ample interior space and a range of efficient engine options. With its modern features and comfortable ride, the Captur is a popular choice for urban drivers seeking practicality and comfort.", imageUrl: "renault-captur.jpg", type: "SUV", hostId: "111" })
        server.create("car", { id: "6", name: "BMW Series 3", price: 130, description: "BMW 3 Series is a line of compact executive cars known for its sporty performance, luxurious features, and sleek design. Renowned for its precise handling and advanced technology, the 3 Series offers a balance of comfort and driving dynamics, making it a popular choice among enthusiasts and professionals alike.", imageUrl: "bmw.jpg", type: "luxury", hostId: "222" })
        server.create("user", { id: "123", email: "bijaygautam7@gmail.com", password: "123456", name: "Bijay" })
    },

    routes() {
        
      this.namespace = "api"

      this.get("/cars", (schema, request) => {
        return schema.cars.all()
        //return new Response(400, {}, {error: "Error fetching data"})
      })

      this.get("/cars/:id", (schema, request) => {
        const id = request.params.id
        return schema.cars.find(id)
      })
      
      this.get("/host/cars", (schema, request) => {
        return schema.cars.where({hostId: "111"})
      })

      this.get("/host/cars/:id", (schema, request) => {
        const id = request.params.id
        return schema.cars.findBy({id, hostId: "111"})
      })

      this.post("/login", (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody)
        
        const foundUser = schema.users.findBy({ email, password })
        
        if (foundUser) {
          return { user: foundUser, token: 'Here is token' }; // Mocking a token for successful login
        } else {
          return { error: 'Invalid username or password' };
        }

      })

    },
})