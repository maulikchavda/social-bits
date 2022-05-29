const express = require('express')
const { chats } = require('./data/data')

const app = express()

app.get('/', (req, res) => {
  res.send('API STARETED RUNNING')
})

app.get('/chats', (req, res) => {
  res.send(chats)
})

app.listen(5000, console.log('server started on port 5000'))
