require('dotenv').config();

const jwt = require('jsonwebtoken');
const utils = require('.');

const { JWT_SECRET } = process.env;

const createToken = (body) => {
  const bodyWithoutPassword = { ...body, password: undefined };
  const token = jwt.sign(bodyWithoutPassword, JWT_SECRET, { algorithm: 'HS256', expiresIn: '7d' });
  return token;
};

const validateToken = (token) => {
  if (!token) utils.createErrors('Token Not Found', 401);
  const decoded = jwt.verify(token, JWT_SECRET);
  if (!decoded) utils.createErrors('Invalid token', 401);
  return decoded;
};

module.exports = {
  createToken,
  validateToken,
};