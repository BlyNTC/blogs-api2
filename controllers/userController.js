const rescue = require('express-rescue');
const { userService } = require('../services');
const utils = require('../utils');
const schemas = require('../schemas');

const getUser = rescue(async (req, res) => {
  const data = await userService.getUsers();
  res.status(200).json(data);
});

const createUser = rescue(async (req, res) => {
  utils.validateJoi(schemas.user, req.body);
  const data = await userService.createUser(req.body);
  res.status(200).json({ message: data });
});

const login = rescue(async (req, res) => {
  utils.validateJoi(schemas.login, req.body);
  const data = await userService.login(req.body);
  res.status(200).json({ token: data });
});

module.exports = {
  getUser,
  createUser,
  login,
};