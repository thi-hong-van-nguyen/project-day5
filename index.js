require('dotenv').config()

console.log('hello')
console.log(process.env.USERNAME)
console.log(process.env.FOO)

const express = require('express')

const server = express()

server.use(express.json())

const port = process.env.PORT || 5000

server.get('/', (req, res) => {
    res.send('<h1>Hello from home page</h1>')
})


server.get('/hello', (req, res) => {
    res.send('<h1>Hello from VAN</h1>')
})

server.listen(port, () => {
    console.log(`\n*** Server listening on port ${port} ***\n`)
})

