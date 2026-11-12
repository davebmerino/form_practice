const expressWinston = require("express-winston");
const logger = require("../helpers/winstons.js");

const expressWinstonMiddleware = expressWinston.logger({
  winstonInstance: logger,
  meta: true,
  msg: "HTTP {{req.method}} {{req.url}} response {{res.statusCode}} {{res.responseTime}}ms",
  expressFormat: true,
  colorize: true,
});

module.exports = expressWinstonMiddleware;
