const Router = require('express').Router();
const { user } = require('../controllers');

Router.get('/', user.getUser);

module.exports = Router;