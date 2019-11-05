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
connection.on('error', (err) => {
  console.log('\n\n\n-------------------------error occurred-------------------------\n\n\n');
});
connection.once('open', () => {
  console.log('\n\n\n-------------------------MongoDB database connection established successfully-------------------------\n\n\n');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
