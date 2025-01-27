const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config() // means we can create a dotenv file


const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
  res.send("test test test :)");
});

module.exports = server;
