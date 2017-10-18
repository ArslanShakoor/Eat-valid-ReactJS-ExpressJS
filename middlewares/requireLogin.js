module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({
      error: 'You mush need to logged in'
    });
  }
  next();
};
