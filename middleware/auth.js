const jwt = require("jsonwebtoken");
const helper = require("../helpers/helper");

const validateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json(helper.response(401, "error", "Token not provided", null));
  }

  const [bearer, tk] = token.split(" ");

  if (bearer !== "Bearer") {
    return res
      .status(401)
      .json(helper.response(401, "error", "Invalid token", null));
  }

  try {
    const decoded = jwt.verify(
      tk,
      "e10fb7ece52d7c1d8acb291df80098955ba888b6806bd7a56232b7764fc289e1"
    );

    req.userData = decoded;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json(helper.response(401, "error", "Token expired", null));
    }
    return res
      .status(401)
      .json(helper.response(401, "error", "Invalid token", null));
  }
};

module.exports = {
  validateToken,
};
