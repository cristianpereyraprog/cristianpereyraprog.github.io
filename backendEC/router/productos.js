import express from 'express'
import controller from '../controller/productos.js'
const router = express.Router()

/* GET ALL/ONE - request de todos los productos */
router.get('/:id?', controller.obtenerProductos)

/* POST - request para agregar un producto */
router.post('/', controller.guardarProducto)

/* PUT - request para actualizar un producto */
router.put('/:id', controller.actualizarProducto)

/* DELETE - request para borrar un producto */
router.delete('/:id', controller.borrarProducto)


export default router