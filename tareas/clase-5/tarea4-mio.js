//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto 
//"El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado
// con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado 
//con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado 
//con el texto "El número más frecuente es..."


let arrayLista =[]

function array(){
    let lista = document.querySelectorAll('li')
    for (let i=0; i<lista.length; i++){
        arrayLista.push(Number(lista[i].innerText))
    }
    return arrayLista
}
console.log (array())


function numeroMasPequeno(){
    let pequenio = arrayLista[0]
    for(let i=0; i<arrayLista.length; i++ ){
        if (arrayLista[i] < pequenio){
            pequenio = arrayLista[i]
        }
        else{}
    }
    return pequenio
}
console.log (numeroMasPequeno())


function numeroMasGrande(){
    let grande = arrayLista[0]
    for(let i=0; i<arrayLista.length; i++ ){
        if (arrayLista[i] > grande){
            grande = arrayLista[i]
        }
        else{}
    }
    return grande
}
console.log (numeroMasGrande())


function numeroMasFrecuente(){
    let a = 0
    let contador = 0
    for (let i=0; i<arrayLista.length; i++){
        for(let j=0; j < i; j++){
            if(arrayLista[j] === arrayLista[i]){
                a = arrayLista[j]
                contador++
                //console.log(contador)
            }
        }
    }
    return a
}
console.log (numeroMasFrecuente())


function promedio(){
    let totalLista = 0
    for(let i=0; i<arrayLista.length; i++ ){
        totalLista = totalLista + Number(arrayLista[i])
        }
    console.log(totalLista)

    return totalLista / arrayLista.length
}
console.log (promedio())


function reemplazoValores(){
    const $promedio = document.querySelector("#promedio")
    $promedio.textContent = `El promedio es  ${promedio()}`

    const $pequenio = document.querySelector("#pequenio")
    $pequenio.textContent = `El numero mas pequenio es ${numeroMasPequeno()}`

    const $grande = document.querySelector("#grande")
    $grande.textContent = `El numero mas grande es ${numeroMasGrande()}`

    const $frecuente = document.querySelector("#frecuente")
    $frecuente.textContent = `El numero mas frecuente es ${numeroMasFrecuente()}`
}
reemplazoValores()

