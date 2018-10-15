const createProfile = require("./src/create-profile");
const updateProfile = require("./src/update-profile");
const updateInterest = require("./src/update-interest");
const get = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({Hello: "Hello"})
  });
};

module.exports = {
  createProfile,
  updateProfile,
  updateInterest,
  get
};
