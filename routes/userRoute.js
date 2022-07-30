const Router = require('express').Router();
const { user, auth } = require('../controllers');

Router.get('/', auth, user.get);
Router.post('/', user.create);

module.exports = Router;