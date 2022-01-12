class CarritoController extends CarritoModel {

    constructor() {
        super()
        try {
            this.carrito = JSON.parse(localStorage.getItem('carrito')) || []
        }
        catch {
            this.carrito = []
            localStorage.setItem('carrito',this.carrito)
        }
    }

    elProductoEstaEnElCarrito(producto) {
        return this.carrito.filter(prod => prod.id == producto.id).length
    }
    
    obtenerProductoDeCarrito(producto) {
        return this.carrito.find(prod => prod.id == producto.id)
    }
    
    agregarAlCarrito(producto) {
        //console.log(producto)
        if(!this.elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            this.carrito.push(producto)
        }
        else {
            let productoDeCarrito = this.obtenerProductoDeCarrito(producto)
            productoDeCarrito.cantidad++
        }   
    
        localStorage.setItem('carrito', JSON.stringify(this.carrito))
    }
    
    async borrarProductoCarrito(id) {
        let index = this.carrito.findIndex(producto => producto.id == id)
        this.carrito.splice(index,1)
        localStorage.setItem('carrito', JSON.stringify(this.carrito))
    
        await renderTablaCarrito(this.carrito)
    }
    
    async enviarCarrito() {
        var elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]
        elemSectionCarrito.innerHTML = '<h2>Enviando carrito...</h2>'
        await carritoService.guardarCarritoService(this.carrito)
        this.carrito = []
        localStorage.setItem('carrito',this.carrito)
    
        elemSectionCarrito.innerHTML = '<h2>Enviando carrito... <b>OK!</b></h2>'
    
        setTimeout(() => {
            elemSectionCarrito.classList.remove('section-carrito--visible')
            mostrarCarrito = false
        },1500)
    }
}

const carritoController = new CarritoController()