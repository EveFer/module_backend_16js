// header application/json
/*
{
    "message": "Hola!!"
}

*/

const http = require('http')

const server = http.createServer((request, response) => {
    // agregar un header
    // mando un json
    // response.setHeader('Content-Type', 'application/json')
    response.writeHead(400, { 'Content-Type': 'application/json' })
    const json = { message: 'Hola mundo!!'}
    const jsonString = JSON.stringify(json)
    console.log(jsonString)
    response.write(jsonString)
    response.end()
})

server.listen(8080, () => {
    console.log('Server running on port 8080')
})