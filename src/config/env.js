require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 8000,
  MONGO_URL: process.env.MONGO_URL,
  DB_NAME: process.env.DB_NAME,
};
