module.exports = (err, req, res, _next) => {
  console.log(err);
  const error = err;
  error.status = err.status || 500;
  res.status(error.status).json({ message: err.message });
};
