
// declaración
// function greeting(nameToGreeting) {
//     return `Hola ${nameToGreeting} buenas noches!!!`
// }

// const result = greeting('Paco')
// console.log('result: ', result)

// // Pasar por referencia
// const otherFunction = greeting
// console.log('otherFunction: ',otherFunction('Hector'))
// const a = otherFunction  // 
// console.log('a:',a('Gus'))

// // 

// const suma = () => {
//     // paso algo
// }

// suma()
// // esto es una funcion anonima
// // () => {
// //     // paso algo
// // }

// const resta = function (a,b) {
//     return a - b
// }

// console.log('rest: ', resta(10,5))

// función autoejecutable

// (function () {
//     const result = 'hola desde una funcion autoejecutable'
//     console.log(result)
// }())


// callbacks


// Los callbacks son la declaracion de una funcion que pasa como parametro a otro funcion para se ejecutada en el futuro

// irAlSuperMercado()
// avisar()

console.log('----Callbacks----')

function irAlSuperMercado(avisarAJefa) {
    console.log('Llendo al superMercado...')
    console.log('Ya llegue')
    avisarAJefa()
}

function avisar() {
    console.log('Jefa ya llegue al superMercado...')
}

irAlSuperMercado(avisar) // bien

// irAlSuperMercado(avisar()) // x
// irAlSuperMercado(undefined)