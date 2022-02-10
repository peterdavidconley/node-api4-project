const express = require('express');
const server = express();
const users = [

    { name: 'Peter' },
    { name: 'James' },
    { name: 'David' },

]

require('dotenv').config()

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`***** Listening on port ${PORT} *****`)
})

server.use('/', (req, res) => {
    res.json('<h1>Root Access Working</h1>')
})

server.get('/api/users', (req, res) => {
    res.json(users)
})

server.post('/api/register', (req, res) => {

})

server.post('/api/login', (req, res) => {
        
})