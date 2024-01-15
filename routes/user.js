const express = require("express");
const router = express.Router();

const userController = require("../controller/user");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware.validateToken);

router.post("/", userController.createUser);

router.get("/", userController.getListUser);

router.get(
  "/account-number/:accountNumber",
  userController.getUserByAccountNumber
);

router.get(
  "/identity-number/:identityNumber",
  userController.getUserByIdentityNumber
);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
