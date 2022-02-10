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

server.get('/', (req, res) => {
    res.json(users)
})