const { MONGO_URL, DB_NAME } = require("./env.js");
const mongoose = require("mongoose");

async function connectionDB() {
  try {
    const connectionString = MONGO_URL ? `${MONGO_URL}/${DB_NAME}` : MONGO_URL;

    await mongoose.connect(connectionString);
  } catch (error) {
    console.log("Error on connecting with database:", error);
    process.exit(1);
  }
}

module.exports = connectionDB;
