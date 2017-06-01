const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Profile service reached!")
})

app.listen(parseInt(process.env.PORT), () => {
  console.log(`Profile service listening in on port ${process.env.PORT}`)
})
