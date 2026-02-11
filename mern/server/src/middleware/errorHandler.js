function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
