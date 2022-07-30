const Router = require('express').Router();
const { user } = require('../controllers');

Router.post('/', user.login);

module.exports = Router;