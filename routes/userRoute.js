const Router = require('express').Router();
const controllers = require('../controllers');

Router.get('/', controllers.auth, controllers.users.get);
Router.get('/:id', controllers.auth, controllers.users.getById);
Router.post('/', controllers.users.create);

module.exports = Router;