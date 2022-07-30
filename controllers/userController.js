const rescue = require('express-rescue');
const services = require('../services');
const utils = require('../utils');
const schemas = require('../schemas');

const get = rescue(async (req, res) => {
  const data = await services.user.get();
  res.status(200).json(data);
});

const create = rescue(async (req, res) => {
  utils.validateJoi(schemas.user, req.body);
  const data = await services.user.create(req.body);
  res.status(200).json({ message: data });
});

const login = rescue(async (req, res) => {
  utils.validateJoi(schemas.login, req.body);
  const data = await services.user.login(req.body);
  res.status(200).json({ token: data });
});

module.exports = {
  get,
  create,
  login,
};