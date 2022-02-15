/*
Construir, aplanar y pintar un muro

1.- Constuir el muro
2.- Aplanar el muro
3.- Pintar
*/

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

// function construir (muroAConstruir) {
//     muroAConstruir.estaConstruido = true
//     return muroAConstruir
// }

// function aplanar (muroAAplanar) {
//     muroAAplanar.estaAplanado = true
//     return muroAAplanar
// }

// function pintar (muroAPintar) {
//     muroAPintar.estaPintado = true
//     return muroAPintar
// }
// // sincrono
// const muroConstruido = construir(muro)
// console.log('muroConstruido: ', muroConstruido)
// const muroAplanado = aplanar(muroConstruido)
// console.log('muroAplanado: ', muroAplanado)
// const muroPintado = pintar(muroAplanado)
// console.log('muroPintado: ', muroPintado)

// Asyncrona
function construir (muroAConstruir, callback) {
    console.log('Iniciando construir...')
    setTimeout(() => {
        let error = null
        muroAConstruir.estaConstruido = true
        if (muroAConstruir.estaConstruido  == false) {
            error = "No se puedo construir"
        }
        // console.log('ya lo cree: ', muroAConstruir)
        
        callback(error, muroAConstruir) // aqui se ejecuta el callback
    }, 3000)
}

function aplanar (muroAAplanar, callback) {
    console.log('Iniciando el aplanado...')
    setTimeout(() => {
        let error = null
        muroAAplanar.estaAplanado = false
        if(muroAAplanar.estaAplanado === false) {
            error = "No se puedo aplanar"
        }
        callback(error, muroAAplanar)
    }, 2000)
}


function pintar (muroApintar, callback) {
    console.log('iniciando el pintado...')
    setTimeout(() => {
        let error = null
        muroApintar.estaPintado = true
        if(muroApintar.estaPintado === false) {
            error = "No se puedo pintar"
        }
        callback(error, muroApintar)
    }, 1000)
}


construir(muro, (error, muroConstruido) => {
    if(error) {
        console.log('Error: ', error)
        return
    }
    // 
    console.log('MuroConstruido: ', muroConstruido)
    aplanar(muro, (errorAplanar, muroAplanado) => {
        if(errorAplanar) {
            console.log('Error: ', error)
            return
        }
        console.log('Muro aplanado: ', muroAplanado)
    })
})

// falsy and truthy

// 
// falsy -> al momento de evealuarlos o cuando hacermos preguntas logicas evaluan a false

// 0 -> false
// '' -> false
// null -> false
// undefined -> false

// if(0) {
//     console.log('Truthy')
// }else {
//     console.log('El cero es un falsy')
// }

// console.log('Falsy----')
// console.log('Cero: ', Boolean(0))
// console.log('null: ', Boolean(null))
// console.log('undefined: ', Boolean(undefined))
// console.log('cadena vacia: ', Boolean(''))

// truthy
// console.log('Truthy----')

// console.log('cualquier numero: ', Boolean(12))
// console.log('cualquier cadena: ', Boolean('Holis'))
// console.log('arreglos: ', Boolean([]))
// console.log('objetos ', Boolean({}))


/*
Proceso inscripción a kodemia

1.- Entrevista
2.- Oferta
3.- Inscripción
4.- Asistir a clases

*/
