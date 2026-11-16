const createUserProvider = require("./providers/createUser.provider.js");
async function handelCreateUser(req, res) {
  return await createUserProvider(req, res);
}

module.exports = {
  handelCreateUser,
};
