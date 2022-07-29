require('dotenv').config();
const express = require('express')
const app = express()
const logger = require('morgan')
const connectDB = require('./config/connection')
const PORT = process.env.PORT || 8000
const colors = require('colors');


app.get('/', (req, res) => {
  res.send('<h1 style="color: red;"> root directory</h1>')
})

/////////////
//Server listener
/////////////
const start = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server is live on port: ${PORT}`)
    })
  } catch (error) {
    console.log(`Catch error: ${error}`)
  }
};

start();