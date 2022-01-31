import service from "../service/carrito.js"

const guardarCarrito = async (req,res) => {
    let carrito = req.body
    let carritoGuardado = await service.guardarCarrito(carrito)
    res.json(carritoGuardado)
}

export default {
    guardarCarrito
}