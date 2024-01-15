const jwt = require("jsonwebtoken");

const generateToken = (email) => {
  const secretKey =
    "e10fb7ece52d7c1d8acb291df80098955ba888b6806bd7a56232b7764fc289e1";

  const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });

  return token;
};

module.exports = {
  generateToken,
};
