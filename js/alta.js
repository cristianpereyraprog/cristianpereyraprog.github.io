// function initAlta (){
// console.log('Alta')
// let productos = []

// const inputs = document.querySelectorAll('main input')
// const form = document.getElementById('form-alta')
// const button = document.querySelector('main form button') 

// button.disabled = true
// let camposValidos= [false,false,false,false,false,false]


// const setCustomValidityJS = function(mensaje, index) {
//     let divs = document.querySelectorAll('form div')
//     divs[index].innerHTML = mensaje
//     divs[index].style.display = mensaje? 'block' : 'none'
// } 

// function algunCampoNoValido() {
//     let valido = 
//         camposValidos[0] &&
//         camposValidos[1] &&
//         camposValidos[2] &&
//         camposValidos[3] &&
//         camposValidos[4] &&
//         camposValidos[5]

//     return !valido
// }

// function validar(valor, validador, index) {
//     console.log(valor, index)
//     if(!validador.test(valor)) {
//         setCustomValidityJS('Este campo no es válido',index)
//         camposValidos[index] = false
//         button.disabled = true
//         return null
//     }

//     camposValidos[index] = true
//     button.disabled = algunCampoNoValido()

//     setCustomValidityJS('',index)
//     return valor
// }

// const regExpValidar = [
//     /^.+$/, //regexp nombre
//     /^.+$/, //regexp precio    
//     /^.+$/, //regexp stock
//     /^.+$/, //regexp foto
//     /^.+$/, //regexp categoria
//     /^.+$/, //regexp detalle
// ]

// inputs.forEach((input,index) => {
//     if(input.type != 'checkbox'){
//     input.addEventListener('input', () => {
//         validar(input.value, regExpValidar[index], index )
//     })
//     }
// })

// form.addEventListener('submit', e => {
//     e.preventDefault()

//     let producto = {
//         nombre: inputs[0].value,
//         precio: inputs[1].value,
//         stock: inputs[2].value,
//         foto: inputs[3].value,
//         categoria: inputs[4].value,
//         detalle: inputs[5].value,
//         envio: inputs[6].checked,

//     }


//         //borro todos los input
//         inputs.forEach(input => {
//             if(input.type != 'checkbox') input.value = ''
//             else if(input.type == 'checkbox') input.checked = false
//         })

//     productos.push(producto)


//     //console.log(productos)
//     renderProds()

//     button.disabled = true
//     camposValidos = [false,false,false,false,false,false,false]

//     renderProds()
// })

// function renderProdsObjetos() {
//     let html = ''
//     for(let i=0; i<productos.length; i++) {
//         html += `<p>${JSON.stringify(productos[i])}</p>`
//     }
//     document.getElementById('listado-productos').innerHTML = html
// }

// function renderProdsTemplateString() {
//     let html = ''

//     html += '<table>'
//     html += `
//         <tr>
//             <th>nombre</th>
//             <th>precio</th>
//             <th>stock</th>
//             <th>foto</th>
//             <th>categoria</th>
//             <th>detalle</th>
//             <th>envio</th>
//         </tr>
//     `

//     for(let i=0; i<productos.length; i++) {
//         let producto = productos[i]

//         html += `
//         <tr>
//             <th>${producto.nombre}</th>
//             <th>${producto.precio}</th>
//             <th>${producto.stock}</th>
//             <th>${producto.foto}</th>
//             <th>${producto.categoria}</th>
//             <th>${producto.detalle}</th>
//             <th>${producto.envio}</th>
//         </tr>
//         `
//     }
//     html += '</table>'
//     document.getElementById('listado-productos').innerHTML = html

// }

// function renderProds() {
//     const xhr = new XMLHttpRequest
//     xhr.open('get', 'plantillas/listado.hbs')
//     xhr.addEventListener('load', () => {
//         if(xhr.status == 200) {
//             let plantillaHbs = xhr.response

//             var template = Handlebars.compile(plantillaHbs);
//             // execute the compiled template and print the output to the console
//             let html = (template({ productos: productos }))

//     document.getElementById('listado-productos').innerHTML = html
//         }
//     })
//     xhr.send()

//     var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
//     // execute the compiled template and print the output to the console
//     let html = (template({ doesWhat: "rocks!" }))

//     document.getElementById('listado-productos').innerHTML = html
// }
// renderProds()
// }