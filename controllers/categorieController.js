const rescue = require('express-rescue');
const services = require('../services');
const utils = require('../utils');
const schemas = require('../schemas');

const get = rescue(async (req, res) => {
  const data = await services.categories.get();
  res.status(200).json(data);
});

const create = rescue(async (req, res) => {
  utils.validateJoi(schemas.categories, req.body);
  const data = await services.categories.create(req.body);
  res.status(200).json(data);
});

module.exports = {
  get,
  create,
};