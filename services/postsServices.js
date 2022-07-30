const { BlogPosts, Users, Categories } = require('../models');
const utils = require('../utils');

const get = async () => {
  const dataPosts = await BlogPosts.findAll(
    { include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ] },
);
  return dataPosts;
};

const create = async (body, token) => {
  const decodeToken = utils.jwt.decodeJwt(token);
  const user = await Users.findOne({ where: { email: decodeToken.email } });
  const createdUser = BlogPosts.create({ ...body, userId: user.id });
  return createdUser;
};

module.exports = {
  get,
  create,
};