const createErrors = require('./createErrors');

const validateJoi = (schema, data) => {
  const result = schema.validate(data);
  if (result.error) {
    createErrors(result.error.details[0].message, 400);
  }
  return result.value;
};

module.exports = { validateJoi };