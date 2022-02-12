const fs = require('fs')

const pathToRead = 'newDirectory'


function myReaddir (path) {
    fs.readdir(path, (error, data) => {
        if (error) {
            console.error('Error: ', error)
            return // salidas tempranas
        }
        console.log('Se leyo el directorio: ', data)
    })
}

myReaddir(pathToRead)