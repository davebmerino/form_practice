const express = require("express");
const { handelCreateUser } = require("./user.controller");
const validateRequest = require("../../middleware/validateRequest");

const userRouter = express.Router();

userRouter.post("/createUser", validateRequest, handelCreateUser);

module.exports = userRouter;
