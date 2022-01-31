import config from '../config.js'

import CarritoModel from '../model/carrito.js'

const model = CarritoModel.get(config.TIPO_DE_PERSISTENCIA)

const guardarCarrito = async carrito => {
    let carritoGuardado = await model.createCarrito(carrito)
    return carritoGuardado
}

export default {
    guardarCarrito
}