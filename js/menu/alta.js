class FormularioAlta {
    inputs = null
    form = null
    button = null
    camposValidos= [false,false,false,false,false,false]
    regExpValidar = [
        /^.+$/, //regexp nombre
        /^.+$/, //regexp precio    
        /^[0-9]+$/, //regexp stock
        /^.+$/, //regexp foto
        /^.+$/, //regexp categoria
        /^.+$/, //regexp detalles
    ]

    constructor(renderTablaAlta, guardarProducto) {
        this.inputs = document.querySelectorAll('main input')
        this.form = document.getElementById('form-alta')
        this.button = document.querySelector('main form button') 
    
        this.button.disabled = true
    
        // console.log(inputs)
        this.inputs.forEach((input,index) => {
            if(input.type != 'checkbox') {
                input.addEventListener('input', () => {
                    this.validar(input.value, this.regExpValidar[index], index )
                    if(renderTablaAlta) renderTablaAlta( !this.algunCampoNoValido(), productoController.productos )
                })
            }
        })
    
        this.form.addEventListener('submit', e => {
            e.preventDefault()
    
            let producto = this.leerProductoIngresado()
            this.limpiarFormulario()

            if(guardarProducto) guardarProducto(producto)
        })
    }
    
    setCustomValidityJS = function(mensaje, index) {
        let divs = document.querySelectorAll('form div')
        divs[index].innerHTML = mensaje
        divs[index].style.display = mensaje? 'block' : 'none'
    }

    algunCampoNoValido() {
        let valido = 
            this.camposValidos[0] &&
            this.camposValidos[1] &&
            this.camposValidos[2] &&
            this.camposValidos[3] &&
            this.camposValidos[4] &&
            this.camposValidos[5]
            // this.camposValidos[6]
        
        return !valido
    }

    validar(valor, validador, index) {
        //console.log(valor,index)

        if(!validador.test(valor)) {
            this.setCustomValidityJS('Este campo no es válido',index)
            this.camposValidos[index] = false
            this.button.disabled = true
            return null
        }

        this.camposValidos[index] = true
        this.button.disabled = this.algunCampoNoValido()

        this.setCustomValidityJS('',index)
        return valor
    }

    leerProductoIngresado() {
        return {
            nombre: this.inputs[0].value,
            precio: this.inputs[1].value,
            stock: this.inputs[2].value,
            foto: this.inputs[3].value,
            // marca: this.inputs[3].value,
            categoria: this.inputs[4].value,
            detalles: this.inputs[5].value,
            
            envio: this.inputs[6].checked,
        }
    }

    limpiarFormulario() {
        //borro todos los input
        this.inputs.forEach(input => {
            if(input.type != 'checkbox') input.value = ''
            else if(input.type == 'checkbox') input.checked = false
        })
    
        this.button.disabled = true
        this.camposValidos = [false,false,false,false,false,false,false]
    }
}




async function renderTablaAlta(validos, productos) {
    let plantillaHbs = await fetch('plantillas/alta.hbs').then(r => r.text())
    // const xhr = new XMLHttpRequest
    // xhr.open('get','plantillas/alta.hbs')
    // xhr.addEventListener('load', () => {
        // if(xhr.status == 200) {
            // let plantillaHbs = xhr.response

            var template = Handlebars.compile(plantillaHbs);
            let html = template({ productos, validos })
            document.getElementById('listado-productos').innerHTML = html            
        }
    // })
    // xhr.send()
    // }

/* ------------------------------------------------------------ */
/*      Inicializaciones para el funcionamiento del módulo      */
/* ------------------------------------------------------------ */
let formularioAlta = null

async function initAlta() {
    console.warn('initAlta()')

    formularioAlta = new FormularioAlta(renderTablaAlta, productoController.guardarProducto)

    let productos = await productoController.obtenerProductos()
    renderTablaAlta(null, productos)
}
