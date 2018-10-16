"use strict";
const connectToDatabase = require("./lib/connectDB");
const User = require("./lib/user");

module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const response = {
    statusCode: 500,
    body: ""
  };
  await connectToDatabase();
  console.log("event: ", event);
  const body = JSON.parse(event.body);
  if (body.user_id) delete body.user_id;
  const user = new User(JSON.parse(event.body));
  return user
    .save()
    .then(savedUser => {
      savedUser = savedUser.toObject();
      response.statusCode = 200;
      response.body = JSON.stringify(savedUser);
      return response;
    })
    .catch(error => {
      console.log("Error:", error);
      response.statusCode = error.statusCode || 500;
      response.headers = { "Content-Type": "text/plain" };
      response.body = "Could not create the user.";
      return response;
    });
};
