const Router = require('express').Router();
const users = require('./userRoute');
const login = require('./loginRoute');
const posts = require('./postRoute');
const categories = require('./categorieRoute');

Router.use('/user', users);
Router.use('/login', login);
Router.use('/post', posts);
Router.use('/categories', categories);

module.exports = Router;