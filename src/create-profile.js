"use strict";
const connectToDatabase = require("./lib/connectDB");
const User = require("./lib/user");

/**
 * @api {post} /create-profile Create Profile [POST]
 * @apiGroup Profile
 * @apiDescription This api is used to create a profile.
 * @apiParam {String} name name of the user.
 * @apiParam {String} email email id of the user.
 * @apiParam {String} mobile_address Mobile Address of the user.
 * @apiParam {String} address address of the user.
 * @apiParam {String} company company of the user.
 * @apiParam {String} title title of the user.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "address": "<address>",
 *       "company": "<company>",
 *       "title": "<title>",
 *       "interest": [],
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
