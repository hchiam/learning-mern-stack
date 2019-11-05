const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// map URL starts:
app.use('/exercises', exerciseRouter); // all URLs will start with '/exercises'
app.use('/users', usersRouter); // all URLs will start with '/users'

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
