/* https://mongoosejs.com/ */
import mongoose from 'mongoose'
import config from '../config.js'

/* ------------------------------------------------------------- */
/* Esquema del documento producto */
const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    foto: String,
    // marca: String,
    categoria: String,
    detalles: String,
    envio: Boolean
})

/* Modelo del documento almacenado en una colección */
const ProductoModel = mongoose.model('productos', productoSchema)
/* ------------------------------------------------------------- */


class ProductoModelMongoDB {
    static conexionOk = false

    static async conectarDB() {
        try {
            await mongoose.connect(config.STR_CNX, {
                useNewUrlParser : true,
                useUnifiedTopology: true
            })
            console.log('Base de datos conectada!')
            ProductoModelMongoDB.conexionOk = true
        }
        catch(error) {
            console.log(`MongoDB error al conectar: ${error.message}`)
        }
    }


    // -----------------------------------------------------------------------------------
    /* CRUD -> C : Create -> http method POST */
    async createProducto(producto) {
        if(!ProductoModelMongoDB.conexionOk) return {}

        try {
            const productoSave = new ProductoModel(producto)
            await productoSave.save()

            let productos = await ProductoModel.find({})
            let productoGuardado = productos[productos.length-1]
            return productoGuardado
        }
        catch(error) {
            console.log(`Error en createProducto: ${error.message}`)
            return {}
        }
    }

    /* CRUD -> R : Read ALL -> http method GET */
    async readProductos() {
        if(!ProductoModelMongoDB.conexionOk) return []

        try {
            let productos = await ProductoModel.find({})
            return productos
        }
        catch(error) {
            console.log(`Error en readProductos: ${error.message}`)
            return []
        }
    }

    /* CRUD -> R : Read ONE -> http method GET */
    async readProducto(id) {
        if(!ProductoModelMongoDB.conexionOk) return {}

        try {
            //let producto = await ProductoModel.find({_id:id})
            //console.log(producto)
            //return producto[0]

            let producto = await ProductoModel.findOne({_id:id})
            return producto
        }
        catch(error) {
            console.log(`Error en readProducto: ${error.message}`)
            return {}
        }
    }

    /* CRUD -> U : Update -> http method PUT */
    async updateProducto(id,producto) {
        if(!ProductoModelMongoDB.conexionOk) return {}

        try {
            await ProductoModel.updateOne({_id:id},{$set: producto})

            let productoActualizado = await ProductoModel.findOne({_id:id})
            return productoActualizado
        }
        catch(error) {
            console.log(`Error en updateProducto: ${error.message}`)
            return {}
        }
    }

    /* CRUD -> D : Delete -> http method DELETE */
    async deleteProducto(id) {
        if(!ProductoModelMongoDB.conexionOk) return {}
        
        try {
            await ProductoModel.deleteOne({_id:id})
            return 'ok deleteProducto'
        }
        catch(error) {
            console.log(`Error en deleteProducto: ${error.message}`)
            return {}
        }
    }
}

export default ProductoModelMongoDB