const express = require('express');

const server = express();

server.use('/', require('body-parser').json());

module.exports = server;
