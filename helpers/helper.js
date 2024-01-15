const crypto = require("crypto");
const util = require("util");

function response(code, status, message, data) {
  return {
    code: code,
    status: status,
    message: message,
    data: data,
  };
}

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

module.exports = { response, generateSecretKey };
