import CarritoModelMongoDB from "./carritoMongoDB.js"

class CarritoModel {
    static get(tipo) {
        switch(tipo) {
            case 'MONGODB':
                console.log('**** PERSISTENCIA EN MONGODB (carrito) ****')
                return new CarritoModelMongoDB()
    
            default:
                console.log('**** PERSISTENCIA DEFAULT (carrito) ****')
                return new CarritoModelMongoDB()
        }
    }
}

export default CarritoModel