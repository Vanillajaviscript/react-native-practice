require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const connectDB = require('./config/connection');
const PORT = process.env.PORT || 8000
const colors = require('colors');
const User = require('./models/user');
const cors = require('cors');

/////////////
//Middleware
/////////////
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create-user', async (req, res) => {
  const user = await User({fullName: 'Javier Delgado', email: 'vanillajaviscript@gmail.com', password: 'Password12345'});
  await user.save();
  res.json(user);
});

/////////////
//Root Directory
/////////////
app.get('/', (req, res) => {
  res.send('<h1 style="color: red;"> root directory</h1>')
});

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