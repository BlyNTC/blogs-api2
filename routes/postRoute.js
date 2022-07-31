const Router = require('express').Router();
const controllers = require('../controllers');

Router.get('/', controllers.auth, controllers.posts.get);
Router.post('/', controllers.posts.create);

module.exports = Router;