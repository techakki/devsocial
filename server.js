const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/API/users');
const profile = require('./routes/API/profile');
const posts = require('./routes/API/posts');

const app = express();

// DB config
const dbConfig = require('./config/keys').mongoDBURI;

// Connect to MongoDB
mongoose
  .connect(dbConfig, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected..!'))
  .catch(error => console.log(error));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.get('/', (request, response) => response.send('Hello World..!'));

const port = 5000;

app.listen(port, () => console.log(`Node server is running on Port ${port}`));
