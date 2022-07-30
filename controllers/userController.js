const rescue = require('express-rescue');
const { userService } = require('../services');

const getUser = rescue(async (req, res) => {
  const data = await userService.getUsers();
  res.status(200).json(data);
});

module.exports = {
  getUser,
};