const Router = require('express').Router();
const userRoute = require('./userRoute');

Router.use('/user', userRoute);

module.exports = Router;