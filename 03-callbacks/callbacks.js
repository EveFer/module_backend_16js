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
        muroAAplanar.estaAplanado = true
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
        console.error('Error: ', error)
        return
    }
    console.log('MuroConstruido: ', muroConstruido)
    aplanar(muroConstruido, (errorAplanar, muroAplanado) => {
        if(errorAplanar) {
            console.error('Error: ', errorAplanar)
            return
        }
        console.log('muroAplanado: ', muroAplanado)
        pintar(muroAplanado, (errorPintar, muroPintado) => {

            if(errorPintar) {
                console.error('Error: ', errorPintar)
                return
            }
            console.log('MuroPintado: ', muroPintado)
        })
    })
})

// Callback hell

// aplanar(muro, (error, muroApalanado) => {
//     console.log('MuroAplanado: ', muroApalanado)
// })



/*
Proceso inscripción a kodemia

1.- Entrevista
2.- Oferta
3.- Inscripción
4.- Asistir a clases

*/
