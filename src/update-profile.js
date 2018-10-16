"use strict";
const connectToDatabase = require("./lib/connectDB");
const User = require("./lib/user");

module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const response = {
    statusCode: 500,
    body: ""
  };
  console.log("event: ", event.queryStringParameters);
  const query = event.queryStringParameters;
  await connectToDatabase();
  const criteria = {
    $or: [
      {
        email: query.id
      },
      {
        mobile_number: query.id
      }
    ]
  };
  return User.findOne(criteria)
    .then(foundUser => {
      const body = JSON.parse(event.body);
      foundUser.mobile_number = body.mobile_number || foundUser.mobile_number;
      foundUser.name = body.name || foundUser.name;
      foundUser.address = body.address || foundUser.address;
      foundUser.company = body.company || foundUser.company;
      foundUser.title = body.title || foundUser.title;
      return foundUser.save();
    })
    .then(savedUser => {
      savedUser = savedUser.toObject();
      console.log(savedUser);
      response.statusCode = 200;
      response.body = JSON.stringify(savedUser);
      return response;
    })
    .catch(error => {
      response.statusCode = error.statusCode || 500;
      response.headers = { "Content-Type": "text/plain" };
      response.body = "Could not create the user.";
      return response;
    });
};
