const Router = require('express').Router();
const { user, auth } = require('../controllers');

Router.get('/', auth, user.getUser);
Router.post('/', user.createUser);

module.exports = Router;