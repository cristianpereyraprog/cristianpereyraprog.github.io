import express from 'express'
import controller from '../controller/carrito.js'
const router = express.Router()

/* POST - request para agregar un producto */
router.post('/', controller.guardarCarrito)


export default router