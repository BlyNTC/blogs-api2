const { Users } = require('../models');
const utils = require('../utils');

const getUsers = async () => {
  const dataUsers = await Users.findAll({ raw: true });
  return dataUsers;
};

const createUser = async (body) => {
  console.log('body', body);
  const userToBeCreated = await Users.findOne({ where: { email: body.email } });
  if (userToBeCreated) {
    utils.createErrors('User already exists', 400);
  }
  const createdUser = Users.create({ ...body });
  return utils.jwt.createToken(createdUser);
};

const login = async (body) => {
  const userFinded = await Users.findOne({ where: { ...body } });
  if (!userFinded) {
    utils.createErrors('Invalid Fields', 400);
  }
  return utils.jwt.createToken(userFinded);
};

module.exports = {
  getUsers,
  createUser,
  login,
};