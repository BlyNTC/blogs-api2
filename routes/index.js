const Router = require('express').Router();
const user = require('./userRoute');
const login = require('./loginRoute');
const post = require('./postRoute');

Router.use('/user', user);
Router.use('/login', login);
Router.use('/post', post);

module.exports = Router;