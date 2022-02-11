console.log('Hola desde node.js')

// Dom
// alert
// promp

let myName = "Fernanda"
const HOST = "http://localhost:8080"

console.log(myName)
console.log(HOST)

// funciones

function suma (a, b) {
    console.log('suma: ', a+b)
    return a + b
}

const resta = (a,b) => {
    console.log('resta: ', a - b)
    return a - b
}

suma(10, 20)
resta(10, 20)

if (false) {
    console.log('Esto es verdadero')
} else {
    console.log('Esto es falso')
}