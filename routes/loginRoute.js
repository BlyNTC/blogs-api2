const Router = require('express').Router();
const controllers = require('../controllers');

Router.post('/', controllers.users.login);

module.exports = Router;