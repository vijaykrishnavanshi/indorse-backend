"use strict";
const connectToDatabase = require("./lib/connectDB");
const User = require("./lib/user");

/**
 * @api {post} /update-interest Update Profile [POST]
 * @apiGroup Profile
 * @apiDescription This api is used to update ineterst of the user.
 *
 * @apiParam (Query) {String} id email or id of the user.
 *
 * @apiParam (body) {String} interest interest of the user.
 * @apiParam (body) {Boolean} remove true if you want to delete the above
 *                                   interest and false if you want to add that
 *                                   interest to the user profile.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "address": "<address>",
 *       "company": "<company>",
 *       "title": "<title>",
 *       "interest": [<updated interest>],
 *       "_id": "<id>",
 *       "name": "<name>",
 *       "email": "<email>",
 *       "mobile_number": "8004913901",
 *       "user_id": 34,
 *       "__v": 0
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to signup.
 *     {
 *       <message>
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *        "Could not create the user."
 *     }
 */

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
