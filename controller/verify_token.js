const jwt = require("jsonwebtoken");

const verify_token = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json("Failed to authenticate");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated!");
  }
};

const verify_authorization = (req, res, next) => {
  verify_token(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not allowed!");
    }
  });
};

module.exports = {
  verify_token,
  verify_authorization,
};
