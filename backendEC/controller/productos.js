import service from "../service/productos.js"

const obtenerProductos = async (req,res) => {
    let id = req.params.id

    if(id) {
        let producto = await service.obtenerProducto(id)
        res.json(producto)
    }
    else {
        let productos = await service.obtenerProductos()
        res.json(productos)
    }
}

const guardarProducto = async (req,res) => {
    let producto = req.body
    let productoGuardado = await service.guardarProducto(producto)
    res.json(productoGuardado)
}


const actualizarProducto = async (req,res) => {
    let id = req.params.id
    let producto = req.body

    let productoActualizado = await service.actualizarProducto(id, producto)
    res.json(productoActualizado)
}

const borrarProducto = async (req,res) => {
    let id = req.params.id
    let productoBorrado = await service.borrarProducto(id)

    res.json(productoBorrado)
}

export default {
    obtenerProductos,   // es igual a -> obtenerProductos : obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}