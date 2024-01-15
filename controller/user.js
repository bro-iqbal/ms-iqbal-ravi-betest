const User = require("../models/user");
const Helper = require("../helpers/helper");

const redis = require("../helpers/utils");

async function createUser(req, res) {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    const users = await User.find();
    await redis.client.set("users", JSON.stringify(users));

    res
      .status(201)
      .json(Helper.response(201, "success", "Create successfully", null));
  } catch (error) {
    res.status(500).json(Helper.response(500, "error", error.message, null));
  }
}

async function getListUser(req, res) {
  try {
    const users = await User.find();

    await redis.client.set("users", JSON.stringify(users));
    res
      .status(200)
      .json(Helper.response(200, "success", "Get data successfully", users));
  } catch (error) {
    res.status(500).json(Helper.response(500, "error", error.message, null));
  }
}

async function getUserByAccountNumber(req, res) {
  const { accountNumber } = req.params;
  try {
    const dt = await redis.client.get("users");

    if (dt) {
      const users = JSON.parse(dt);

      var user = users.find((v) => v.accountNumber == accountNumber);
    } else {
      var user = await User.findOne({ accountNumber: accountNumber });
    }

    res
      .status(200)
      .json(Helper.response(200, "success", "Get data successfully", user));
  } catch (error) {
    res.status(404).json(Helper.response(404, "error", error.message, null));
  }
}

async function getUserByIdentityNumber(req, res) {
  const { identityNumber } = req.params;
  try {
    const dt = await redis.client.get("users");

    if (dt) {
      const users = JSON.parse(dt);

      var user = users.find((v) => v.identityNumber == identityNumber);
    } else {
      var user = await User.findOne({ identityNumber: identityNumber });
    }

    res
      .status(200)
      .json(Helper.response(200, "success", "Get data successfully", user));
  } catch (error) {
    res.status(404).json(Helper.response(404, "error", error.message, null));
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    const users = await User.find();
    await redis.client.set("users", JSON.stringify(users));

    res
      .status(200)
      .json(Helper.response(200, "success", "Update data successfully", null));
  } catch (error) {
    res.status(404).json(Helper.response(404, "error", error.message, null));
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);

    const users = await User.find();
    await redis.client.set("users", JSON.stringify(users));

    res
      .status(200)
      .json(Helper.response(200, "success", "Delete data successfully", null));
  } catch (error) {
    res.status(404).json(Helper.response(404, "error", error.message, null));
  }
}

module.exports = {
  createUser,
  getListUser,
  getUserByAccountNumber,
  getUserByIdentityNumber,
  updateUser,
  deleteUser,
};
