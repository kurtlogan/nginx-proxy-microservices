const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Auth service reached!")
})

app.listen(parseInt(process.env.PORT), () => {
  console.log(`Auth service listening in on port ${process.env.PORT}`)
})
