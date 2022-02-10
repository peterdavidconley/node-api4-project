const express = require('express');
const server = express();
const users = [

    { name: 'Peter' },
    { name: 'James' },
    { name: 'David' },

]

require('dotenv').config()

const PORT = process.env.PORT;

// Functions

function insert(post) {
    return db('posts')
      .insert(post)
      .then(ids => ({ id: ids[0] }));
  }

  // Endpoints

server.listen(PORT, () => {
    console.log(`***** Listening on port ${PORT} *****`)
})

server.get('/api/users', (req, res) => {
    res.json(users)
})

server.post('/api/register', (req, res) => {

    insert(req.body.params)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({message: 'Error happened registering.'})
    })

})

server.post('/api/login', (req, res) => {
        
    insert(req.body.params)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({message: 'Error happened logging in.'})
    })
})