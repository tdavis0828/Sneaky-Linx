const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
require('dotenv').config();
const server = express();
const port = process.env.PORT || 5000;

server.get('/api/posts', (req, res) => {
  console.log('Hit the route');
  console.log(req.url);
  res.send('here is a message');
});

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public')); // Will be changing later
server.use(logger('dev'));

// ?
const usersRouter = require('./routes/users');
server.use('/users', usersRouter);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});
