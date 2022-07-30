const { Users } = require('../models');
const utils = require('../utils');

const get = async () => {
  const dataUsers = await Users.findAll({ raw: true });
  return dataUsers;
};

const create = async (body) => {
  const userToBeCreated = await Users.findOne({ where: { email: body.email } });
  if (userToBeCreated) {
    utils.createErrors('User already exists', 400);
  }
  const createdUser = Users.create({ ...body });
  return utils.jwt.createToken(createdUser.dataValues);
};

const login = async (body) => {
  const userFinded = await Users.findOne({ where: { ...body }, raw: true });
  if (!userFinded) {
    utils.createErrors('Invalid Fields', 400);
  }
  return utils.jwt.createToken(userFinded);
};

module.exports = {
  get,
  create,
  login,
};