const fs = require("fs");
const cors = require("cors");
const path = require("path");
const express = require("express");

const morgan = require("morgan");
const { StatusCodes } = require("http-status-codes");

const app = express();

app.use(express.json());
app.use(cors());

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a",
  },
);

app.use(morgan("combined", { stream: accessLogStream }));

app.use((req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({
      message: "Route not found",
      status: StatusCodes.NOT_FOUND,
      message: "Route not found",

       
    });
});

module.exports = app;
