const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const helper = require("../helpers/helper");

router.post("/generate-token", (req, res) => {
  const data = req.body;

  const token = authController.generateToken(data.email);

  res.json(
    helper.response(200, "success", "Generate token successfully", {
      token: token,
    })
  );
});

module.exports = router;
