const users = require('./userController');
const auth = require('./authController');
const posts = require('./postController');
const categories = require('./categorieController');

module.exports = { 
  users,
  auth,
  posts,
  categories,
};