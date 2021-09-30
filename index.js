require('dotenv').config()
const path = require('path')

const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(
    path.join(__dirname, 'client/build')
))


server.get('/hello', (req, res) => {
    res.send('<h1>Hello from VAN</h1>')
})

server.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'client/build', 'index.html')
    )
})

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`\n*** Server listening on port ${port} ***\n`)
})

