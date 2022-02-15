

function construir(muroAConstruir) {
    console.log('Muro construyendo...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muroAConstruir.estaConstruido = true
            // 
            if(muroAConstruir.estaConstruido) {
                resolve(muroAConstruir)
            }else {
                reject('No se puedo construir el muro')
            }
        }, 2000)
    })
}

function aplanar (muroAAplanar) {
    console.log('Aplanando Muro...')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            muroAAplanar.estaAplanado = false
            // si es true
            if(muroAAplanar.estaAplanado) {
                resolve(muroAAplanar)
            } else {
                reject('No se pudo aplanar el muro')
            }
        }, 2000)
    })
}

function pintar (muroAPintar) {
    console.log('Pintando el muro...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muroAPintar.estaPintado = true
            // si es falso
            if(!muroAPintar.estaPintado) {
                reject('No se pudo pintar')
                return // salida temprana
            }
            resolve(muroAPintar)
        }, 3000)
    })
}

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

// construir(muro)
//     .then((muroConstruido) => {
//         console.log('Muro construido: ', muroConstruido)

//         aplanar(muroConstruido)
//             .then((muroAplanado) => {
//                 console.log('Muro aplanado: ', muroAplanado)

//                 pintar(muroAplanado)
//                     .then((muroPintado) => {
//                         console.log('Muro Pintado: ', muroPintado)
//                     })
//                     .catch((error) => {
//                         console.error('Error al pintar: ', error)
//                     })
//             })
//             .catch((error) => {
//                 console.error('Error al aplanar: ', error)
//             })
//     })
//     .catch((error) => {
//         console.error('Error al construir:', error)
//     })

// async / await

/*
async -> marca a una funcion como asincrona
await -> esperar la ejecucion de una promesa

PARA USAR AWAIT NECESITAMOS UNA FUNCION A LA QUE MARCAREMOS COMO ASYNCRONA


LAS FUNCIONES QUE MARQUEMOS COMO ASYNCRONAS POR DEFECTO REGRESAN UNA PROMESA
*/


async function main () {
   const muroConstruido = await construir(muro)
   console.log('Muro Construido: ', muroConstruido)
   const muroAplanado = await aplanar(muroConstruido)
   console.log('Muro aplanado: ', muroAplanado)
   const muroPintado = await pintar(muroAplanado)
   console.log('Muro pintado: ', muroPintado)
}

main()
.then(() => {
    console.log('Todo chido ^^')
})
.catch((error) => {
    console.error('Error: ', error)
})

/*
1.- Pasar el proceso de inscription de kodemia a promesas
    para ejecutar as promesas:  
    - then catch
    - async / await

2.- Consumir el modulo del fs de node que brinda con las promesas
*/