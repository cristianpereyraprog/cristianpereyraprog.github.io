import fs from 'fs'


class ProductoModelFile {
    /* ----------------------- E/S FILE SYSTEM --------------------------------------- */
    nombreArchivo = 'productos.dat'

    async leerArchivoProductos() {
        try {
            let productos = await JSON.parse(await fs.promises.readFile(this.nombreArchivo,'utf-8'))
            return productos
        }
        catch(error) {
            console.log(error.message)
            let productos = []
            return productos
        }
    }

    async guardarArchivoProductos(productos) {
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos,null,'\t'))
    }

    getId(productos) {
        return productos.length? (productos[productos.length - 1].id + 1) : 1
    }

    /* ----------------------- CRUD -------------------------- */
    /* CRUD -> C : Create -> http method POST */
    async createProducto(producto) {
        let productos = await this.leerArchivoProductos()

        producto.id = this.getId(productos)
        productos.push(producto)

        await this.guardarArchivoProductos(productos)

        return producto
    }

    /* CRUD -> R : Read ALL -> http method GET */
    async readProductos() {
        let productos = await this.leerArchivoProductos()

        return productos
    }

    /* CRUD -> R : Read ONE -> http method GET */
    async readProducto(id) {
        let productos = await this.leerArchivoProductos()

        let producto = productos.find(producto => producto.id == id) || {}
        return producto
    }

    /* CRUD -> U : Update -> http method PUT */
    async updateProducto(id,producto) {
        let productos = await this.leerArchivoProductos()

        producto.id = id
        let index = productos.findIndex(producto => producto.id == id)
        productos.splice(index,1,producto)

        await this.guardarArchivoProductos(productos)

        return producto
    }

    /* CRUD -> D : Delete -> http method DELETE */
    async deleteProducto(id) {
        let productos = await this.leerArchivoProductos()

        let index = productos.findIndex(producto => producto.id == id)
        let producto = productos.splice(index,1)[0]

        await this.guardarArchivoProductos(productos)

        return producto
    }
}

export default ProductoModelFile