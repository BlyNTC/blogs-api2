const { Categories } = require('../models');
const utils = require('../utils');

const get = async () => {
  const dataPosts = await Categories.findAll({ raw: true });
  return dataPosts;
};

const create = async (body) => {
  const categorie = await Categories.findOne({ where: { name: body.name } });
  if (categorie) {
    utils.createErrors('Categorie already exists', 400);
  }
  const createdUser = Categories.create({ ...body });
  return createdUser;
};

module.exports = {
  get,
  create,
};