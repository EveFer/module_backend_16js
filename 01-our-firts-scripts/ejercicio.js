// crear una funcion que nos saludo por un nombre
// la funcion debe retornar el saludo en un string
// Usar el valor de retorno de la función para hacer un console.log


// declaración de la funcion
function greeting(nameToGreeting) {
    return `Hola ${nameToGreeting} buenas noches!!`
}

// ejecutando la funcion
const greetingToFer = greeting('Fernanda') // pasar el valor de retorno a la variable
console.log('greetingToFer: ',greetingToFer)

const greetingToRobert = greeting('Robert')
console.log('greetingToRobert: ', greetingToRobert)

let namePaco = "Paco"

console.log('saludo a paco: ', greeting(namePaco))

// una funcion que me regrese nombres aleatoria
function getNameRandom() {
    // index last = 6
    // length = 7 -> la cantidad de items de un arreglo
    const arrayNames = ['Paco', 'Erick', 'Brayan', 'Jess', 'Gus', 'Vic', 'Rubs']
    // poder generar in indexRandom 
    const indexRandom = Math.floor(Math.random() * (arrayNames.length - 0) + 0) // 16.43 -> 16
    return arrayNames[indexRandom] // string
}

const getNameRandom2 = () => {
    // index last = 6
    // length = 7 -> la cantidad de items de un arreglo
    const arrayNames = ['Paco', 'Erick', 'Brayan', 'Jess', 'Gus', 'Vic', 'Rubs']
    // poder generar in indexRandom 
    const indexRandom = Math.floor(Math.random() * (arrayNames.length - 0) + 0) // 16.43 -> 16
    return arrayNames[indexRandom] // string
}

// cuando ejecutan o llaman la funcion se colocan los parentesis
getNameRandom2()

console.log('name random:', getNameRandom())
// pasar el retorno de una funcion a otra funcion
                                // 'string'
const greetingRandom = greeting(getNameRandom())  // greeting('') -> pasar la ejecucion de la función a otra función
console.log('greetingRandom: ', greetingRandom)

const nameRandom = getNameRandom()
console.log('otherGreeting: ', greeting(nameRandom))