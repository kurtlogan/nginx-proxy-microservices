const fetch = require('node-fetch')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  fetch('http://auth').then(() => {
    res.send("Auth service via Proxy service reached!")
  })
})

app.listen(parseInt(process.env.PORT), () => {
  console.log(`Proxy service listening in on port ${process.env.PORT}`)
})
