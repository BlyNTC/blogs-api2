const Router = require('express').Router();
const controllers = require('../controllers');

Router.get('/', controllers.categories.get);
Router.post('/', controllers.categories.create);

module.exports = Router;