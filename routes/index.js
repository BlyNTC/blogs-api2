const Router = require('express').Router();
const userRoute = require('./userRoute');
const loginRoute = require('./loginRoute');

Router.use('/user', userRoute);
Router.use('/login', loginRoute);

module.exports = Router;