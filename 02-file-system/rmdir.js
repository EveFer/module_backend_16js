const fs = require('fs')


// Leer el directorio -> readdir
// con el arreglo de los archivos
// POr cada archivo borrarlo -> unLink()
// Eliminar el directorio con rmddir

function rmdir (pathToDelete) {
    fs.readdir(pathToDelete, (error, filesAndDirectories) => {
        if(error) {
            console.error('Error: ', error)
            return
        }
        // aqui ya tengo acceso a la data 
        console.log(filesAndDirectories)
        filesAndDirectories.forEach((file, index) => {
            // console.log(pathToDelete)
            // console.log(file)
            const newPathFile = `${pathToDelete}/${file}`
            console.log(newPathFile)
            fs.unlink(newPathFile, (error) => {
                if(error) {
                    console.error('Error: ', error)
                    return
                }
                console.log('Se borro el archivo: ', newPathFile)
                // validar que sea el ultimo elemento que se borro
                if(index === filesAndDirectories.length - 1) {
                    fs.rmdir(pathToDelete, (error) => {
                        if(error) {
                            console.error('Error: ', error)
                            return
                        }
                        console.log('Se borro el directorio: 🤓')
                    })
                }
            })
        })
    })
}

// const files = fs.readdirSync("newDirectory")
// console.log('files: ', files)
// rmdir("newDirectory")

// path: ./newDirectory/file1.txt

// funcion rmdir sync

function rmdirSync (pathToDelete) {
    const files = fs.readdirSync(pathToDelete)
    files.forEach((file) => {
        const newPathFile = `${pathToDelete}/${file}`
        fs.unlinkSync(newPathFile)
    })
    fs.rmdirSync(pathToDelete)
}