const rescue = require('express-rescue');
const services = require('../services');
const utils = require('../utils');
const schemas = require('../schemas');

const get = rescue(async (req, res) => {
  const data = await services.posts.get();
  res.status(200).json(data);
});

const create = rescue(async (req, res) => {
  utils.validateJoi(schemas.posts, req.body);
  const data = await services.posts.create(req.body, req.headers.authorization);
  res.status(200).json(data);
});

module.exports = {
  get,
  create,
};