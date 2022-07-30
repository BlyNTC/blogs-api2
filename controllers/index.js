const user = require('./userController');
const auth = require('./authController');
const posts = require('./postController');

module.exports = { 
  user,
  auth,
  posts,
};