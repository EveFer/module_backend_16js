const http = require('http')

const server = http.createServer((request, response) => {

    console.log('url: ', request.url)
    console.log('method: ', request.method)
    response.write('Hola desde my servidor con Node.JS')
    response.end()
})

server.listen(8081, () => {
    console.log('Servidor escuchando en el puerto :8081')
})