const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB config
const dbConfig = require('./config/keys').mongoDBURI;

// Connect to MongoDB
mongoose
  .connect(dbConfig, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected..!'))
  .catch(error => console.log(error));

app.get('/', (request, response) => response.send('Hello World'));
const port = 5000;

app.listen(port, () => console.log(`Node server is running on Port ${port}`));
