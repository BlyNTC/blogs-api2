const Router = require('express').Router();
const { user } = require('../controllers');

Router.get('/', user.getUser);
Router.post('/', user.createUser);

module.exports = Router;