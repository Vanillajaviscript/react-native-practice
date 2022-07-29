const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = process.env.PORT || 8000



app.get('/', (req, res) => {
  res.send('<h1 style="color: red;"> root directory</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})