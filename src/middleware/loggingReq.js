const logRequestMiddleware = (req, res, next) => {
  console.log(`Terjadi Request ke PATH : ${req.path}`);
  next();
};

module.exports = logRequestMiddleware;
