const mongoose = require("mongoose");

const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: { type: String, default: uuidv4 },
  userName: { type: String, required: true, unique: true },
  accountNumber: { type: Number, required: true, unique: true, index: true },
  emailAddress: { type: String, required: true, unique: true },
  identityNumber: { type: Number, required: true, unique: true, index: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
