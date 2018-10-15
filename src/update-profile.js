'use strict';
const connectToDatabase = require('./lib/connectDB');
const User = require("./lib/user");

module.exports = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      User.findById(event.pathParameters.id)
        .then(user => callback(null, {
          statusCode: 200,
          body: JSON.stringify(user)
        }))
        .catch(error => callback(null, {
          statusCode: error.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the note.'
        }));
    });
};
