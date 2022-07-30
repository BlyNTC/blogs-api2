const { Users } = require('../models');

const getUsers = async () => {
  const dataUsers = await Users.findAll({ raw: true });
  return dataUsers;
};

module.exports = {
  getUsers,
};