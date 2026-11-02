const fs = require("fs");
const cors = require("cors");
const path = require("path");
const express = require("express");

const morgan = require("morgan");

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

module.exports = app;
