require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twiter', (req, res) => {
    res.send('saifdotcom')
  })
  
  app.get('/login', (req, res) => {
    res.send('<h1>saif is brillient</h1>')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})