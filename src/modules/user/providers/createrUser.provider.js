const { matchedData } = require("express-validator");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

const errorLogger = require("../../../helpers/errorLogger");
const User = require("../user.schema");

async function createUserProvider(req, res) {
  const validatedData = matchedData(req);

  //check if the email user exist
  const existingUser = await User.findOne({
    email: validatedData.email,
  });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User with this email already exists" });
  }

  //hashing and salt the password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(validatedData.password, salt);

  try {
    const user = new User({
      firsName: validatedData.firsName,
      lastName: validatedData.lastName,
      email: validatedData,
      password: hashedPassword,
    });

    await user.save();
    delete user.password;

    return res.status(StatusCodes.CREATED).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    errorLogger("Error while creating a user", req, error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      message: "Error creating user",
    });
  }
}

module.exports = createUserProvider;
