class ProductoModelMem {

    productos = []
    idProducto = 0

    /* CRUD -> C : Create -> http method POST */
    async createProducto(producto) {
        producto.id = ++this.idProducto
        this.productos.push(producto)
        return producto
    }

    /* CRUD -> R : Read ALL -> http method GET */
    async readProductos() {
        return this.productos
    }

    /* CRUD -> R : Read ONE -> http method GET */
    async readProducto(id) {
        let producto = this.productos.find(producto => producto.id == id) || {}
        return producto
    }

    /* CRUD -> U : Update -> http method PUT */
    async updateProducto(id,producto) {
        producto.id = id
        let index = this.productos.findIndex(producto => producto.id == id)
        this.productos.splice(index,1,producto)

        return producto
    }

    /* CRUD -> D : Delete -> http method DELETE */
    async deleteProducto(id) {
        let index = this.productos.findIndex(producto => producto.id == id)
        let producto = this.productos.splice(index,1)[0]

        return producto
    }
}

export default ProductoModelMem