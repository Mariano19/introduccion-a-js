//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


function cambiarNombre(){
    const titulo = document.querySelector("h1")
    const primerNombre = document.querySelector('#primer-nombre').value
    titulo.textContent = `Bienvenido ${primerNombre}`
}

function crearTexto(){
    const primerNombre = document.querySelector('#primer-nombre').value
    const segundoNombre = document.querySelector('#segundo-nombre').value
    const apellidoUsuario = document.querySelector('#apellido').value
    const edadUsuario = document.querySelector('#edad').value
    const body = document.querySelector('body') 
    const nuevoParrafo = document.createElement('p')
    const nuevoTexto = document.createTextNode(primerNombre + segundoNombre + apellidoUsuario + edadUsuario)
    nuevoParrafo.appendChild(nuevoTexto)
    body.appendChild(nuevoParrafo)
}

let resumen = document.querySelector('#datos-usuario')
resumen.onclick = function(){


    cambiarNombre()
    crearTexto()

    return false
}