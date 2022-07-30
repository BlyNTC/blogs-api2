require('dotenv').config();

const rescue = require('express-rescue');
const utils = require('../utils');

module.exports = rescue((req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
    utils.jwt.validateToken(authorization);
    next();
});