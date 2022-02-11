const fs = require('fs')

// fs.writeFile(file, data[, options], callback)
const content = `Esto es el contendido
agregado desde nodejs`

fs.writeFile('new-file.txt', content, 'utf8', (error) => {
    if (error) {
        console.log('No se puedo crear el archivo')
    }else {
        console.log('Se creo el archivo correctamente')
    }
})