const Router = require('express').Router();
const controller = require('../controllers');

Router.get('/', controller.auth, controller.posts.get);
Router.post('/', controller.posts.create);

module.exports = Router;