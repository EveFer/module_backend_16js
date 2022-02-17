const http = require('http')

const server = http.createServer((request, response) => {

    console.log('url: ', request.url)
    console.log('method: ', request.method)
    if(request.url === '/koders') {
        if(request.method === 'GET') {
            response.write('Aqui estan todos los koders')
        }else if(request.method === 'POST') {
            response.write('Aqui puedes crear koders')
        }else {
            response.write('No estaba preparado para esto u.u')
        }
    } else if(request.url === "/mentors") {
        
    } else {
        response.write('No estaba preparado para esto u.u')
    }
    response.end()
})




server.listen(8081, () => {
    console.log('Servidor escuchando en el puerto :8081')
})

// Ejercicio 1:
// /koders
// GET /koders -> Aqui estan todos los koders
// POST /koders -> Aqui puedes crear koders
// X /x -> No estaba preparado para esto.